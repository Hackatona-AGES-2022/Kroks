import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { VoiceService } from 'src/app/services/voice.service';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  @Output('textChange') textChange = new EventEmitter<string>();

  sendAudio: boolean =false;

  isRecording = false;

  constructor(public service: VoiceService, private http: HttpService) {}

  ngOnInit(): void {
    this.recognition.interimResults = true;
    this.recognition.lang = 'pt-BR';
    this.recognition;

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
    this.text = '';
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
  }

  startStopRecording() {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      this.start();
    } else {
      this.stop();
    }
  }

  handleClick() {
    document.getElementById('file-input')?.click();
  }

  handleFile(event: any) {
    const file: File = event.target.files[0];

    this.sendAudio = true;
    
    this.text = '';
    this.http.sendAudio(file).subscribe((d: any) => {
      this.text = d;
      this.sendAudio = false;
    });
  }
}
