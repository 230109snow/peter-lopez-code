import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apikey, apiroot } from 'src/api-key';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string):Observable<any> {
    const url = `${apiroot}forecast.json?key=${apikey}&q=${city}&days=1&aqi=no&alerts=no`;
    return this.http.get(url, {
      
    })
  }
}
