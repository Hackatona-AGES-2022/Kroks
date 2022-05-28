import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  constructor() {}

  async getCurrentLocation(): Promise<string> {
    let str = '';

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          str += latitude;
          str += ' ' + longitude;
        }
      );
    }

    return str;
  }
}
