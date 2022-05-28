import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  isRecording = false;

  constructor() {}

  ngOnInit(): void {}

  startStopRecording() {
    this.isRecording = !this.isRecording;
  }
}
