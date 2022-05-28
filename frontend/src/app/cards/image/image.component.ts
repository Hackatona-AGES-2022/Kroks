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
  isPhotoTook: boolean = false;
  trigger: Subject<void> = new Subject<void>();
  stream: any = null;
  imageFile: any = null;

  constructor(private http: HttpService) {
    
  }

  ngOnInit(): void {}

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  checkPermissions() {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: {min: 200},
        height: {min: 200}
      }
    }).then((res) => {
      this.stream = res;
      this.isTakingPhoto = !this.isTakingPhoto
    })
  }

  captureImage() {
    this.trigger.next();
  }

  snapshot (event: WebcamImage) {
    this.imageFile = this.handleCapturedImage(event)
    this.http.sendImage(this.imageFile)
    this.isTakingPhoto = !this.isTakingPhoto
    this.isPhotoTook = !this.isPhotoTook
  }

  handleCapturedImage(webcamImage: WebcamImage): File  {
    const arr = webcamImage.imageAsDataUrl.split(",");
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file: File = new File([u8arr], "taken-photo", { type: "image/jpeg" })
    return file
  }
}
