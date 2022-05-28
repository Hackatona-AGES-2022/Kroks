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

  public async sendImage(image: File) {
    const request = {
      image: image,
      content_type: image.type,
      location: await this.geoService.getCurrentLocation(),
    };

    console.log(request);

    return this.http.post(this.url + '/image', image, {
      headers: this.headers,
    });
  }

  public sendAudio(audio: File) {
    return this.http.post(this.url + '/audio', audio, {
      headers: this.headers,
    });
  }
}
