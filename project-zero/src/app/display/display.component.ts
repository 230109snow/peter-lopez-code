import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent {
  
  constructor (private weatherService : WeatherService) {}

  city : string = "Miami" ;
  curTemp : number = 0 ;
  feelTemp : number = 0;
  precip : number = 0;
  humidity : number = 0;
  windSpeed : number = 0;
  data : string = '';

  getWeather() : void {
    
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.data = data;
      this.curTemp = data.current.temp_f;
      this.feelTemp = data.current.feelslike_f;
      this.precip = data.current.precip_in;
      this.humidity = data.current.humidity;
      this.windSpeed = data.current.wind_mph;

    });
  }

  ngOnInit(){
    
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.data = data;
      /*console.log(data.current.temp_f);
      console.log(data.current.feelslike_f);
      console.log(data.current.precip_in);
      console.log(data.current.humidity);
      console.log(data.current.wind_mph); */
      this.curTemp = data.current.temp_f;
      this.feelTemp = data.current.feelslike_f;
      this.precip = data.current.precip_in;
      this.humidity = data.current.humidity;
      this.windSpeed = data.current.wind_mph;

    });
  }

}
