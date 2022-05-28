import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeoService } from './services/geo.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // private url =
  //   'https://pucrs.cognitiveservices.azure.com/vision/v3.1/describe';

  private url = 'http://localhost:8000';

  constructor(private http: HttpClient, private geoService: GeoService) {}

  private headers = new HttpHeaders({
    'Content-Type': 'application/octet-stream',
  });

  public sendImage(image: File) {
    const header = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      'content-type-aux': image.type,
      'region': 'Brazil'
    })
    return this.http.post(this.url + '/audio-image', image, {
      headers: header,
    });
  }

  public sendAudio(audio: File) {
    return this.http.post(this.url + '/audio', audio, {
      headers: this.headers,
    });
  }
}
