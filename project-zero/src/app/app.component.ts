import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'project-zero';
  data! : any;
  cityName : string = '';

constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
    this.weatherService.getWeather("Miami").subscribe((data) => {
      this.data = data;
      console.log(data.current.temp_c);
    });
  }

}