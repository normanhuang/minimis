import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  places$: string[];
  constructor(private weatherService: WeatherService) {
    this.weatherService.getCurrentTemp('Paris');
   }

  ngOnInit() {
  }

}
