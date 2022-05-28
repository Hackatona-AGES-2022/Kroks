import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  constructor() {}

  getCurrentLocation(): string {
    let str = '';

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        str += position.coords.latitude + 'lat';
        str += position.coords.longitude + 'long';
      });
    }

    return str;
  }
}
