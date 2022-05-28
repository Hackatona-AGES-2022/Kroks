import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  isTakingPhoto: boolean = false;
  trigger: Subject<void> = new Subject<void>();
  stream: any = null;
  imageFile: any = null;
  response: string = '';
  webcamActive: boolean = false;
  audio?: string
  showAudio: boolean = false;
  hasError: boolean = false;
  errorMessage: string = '';
  sendImage: boolean = false;
  sendBigImage: boolean = false;

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  checkPermissions() {
    this.hasError = false;
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { min: 200 },
          height: { min: 200 },
        },
      })
      .then((res) => {
        this.stream = res;
        this.isTakingPhoto = !this.isTakingPhoto;
        this.response = '';
      }).catch(err => {
          if(err.message === 'Permission denied') {
            this.errorMessage = "Você não permitiu a utilização da câmera. Tente novamente."
          }
          this.hasError = true;
      });

    this.captureImage();
  }

  captureImage() {
    this.trigger.next();
  }

  snapshot(event: WebcamImage) {
    this.imageFile = this.handleCapturedImage(event);
    this.showAudio = false
    this.response = '';
    this.sendBigImage = true;
  
    this.http.sendImage(this.imageFile).subscribe((d: any) => {
      this.response = d.text.data;
      this.audio = d.audio;
      this.showAudio = true;
      this.sendBigImage = false;
    });
    this.isTakingPhoto = true;
  }

  handleCapturedImage(webcamImage: WebcamImage): File {
    const arr = webcamImage.imageAsDataUrl.split(',');
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file: File = new File([u8arr], 'taken-photo', { type: 'image/jpeg' });
    return file;
  }

  handleClick() {
    document.getElementById('file-input')?.click();
  }

  handleFile(event: any) {
    const file: File = event.target.files[0];
    this.showAudio = false
    this.sendImage =false;
    this.response = '';
    this.http.sendImage(file).subscribe((d: any) => {
      this.response = d.text.data;
      this.audio = d.audio;
      this.showAudio = true;
      this.sendImage = false;
    });
  }

  closeWebcam() {
    this.isTakingPhoto = false;
    this.stream = null;
    this.response = '';
  }
}
