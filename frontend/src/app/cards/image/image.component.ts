import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}

  ngOnInit(): void {}
=======
  stream: any = null;
  trigger: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  checkPermissions() {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 500,
        height: 500
      }
    }).then((res) => {
      this.stream = res;
    }).catch(err => {
      
    })
  }

  captureImage() {
    this.trigger.next();
  }

  snapshot (event: WebcamImage) {
    console.log(event);
  }
>>>>>>> 47bf00b6110f5889dd3b44a8d242572647307d66
}
