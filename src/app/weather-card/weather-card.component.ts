import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  currentTemp: number;
  condition: string;
  minTemp: number;
  maxTemp: number;
  @Input() city: string;
  constructor(private weatherService: WeatherService) {
   }

  ngOnInit() {
    this.weatherService.getCurrentTemp(this.city, 'metric').subscribe(data => this.currentTemp = data);
    this.weatherService.getWeatherState(this.city).subscribe(data => this.condition = data);
    this.weatherService.getMinTemp(this.city).subscribe(data => this.minTemp = data);
    this.weatherService.getMaxTemp(this.city).subscribe(data => this.maxTemp = data);
  }

}
