import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VoiceService } from 'src/app/services/voice.service';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  @Output('textChange') textChange = new EventEmitter<string>();

  isRecording = false;

  constructor(public service: VoiceService) {}

  ngOnInit(): void {
    this.recognition.interimResults = true;
    this.recognition.lang = 'pt-BR';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords = '';

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
    this.textChange.emit(this.text);
  }

  startStopRecording() {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      this.start();
    } else {
      this.stop();
    }
  }
}
