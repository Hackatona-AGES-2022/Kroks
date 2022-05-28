import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url =
    'https://pucrs.cognitiveservices.azure.com/vision/v3.1/describe';

  constructor(private http: HttpClient) {}

  public sendImage(image: any) {
    let params = {
      // Choose categories to analyze - see the documentation for reference
      visualFeatures: 'Categories,Tags,Description,Faces,ImageType,Color,Adult',
      details: '',
      language: 'en',
    };

    const formData = new FormData();

    formData.append('imageFile', image);

    console.log(image);

    return this.http.post(this.url, image, {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': '023a76ba2895452f8bef3d5fe501d662',
      }),
    });
  }
}
