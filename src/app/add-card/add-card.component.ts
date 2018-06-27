import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {

  AddPlaces(place: string, places: string[]) {
    places.push(place);
    return places;
  }

  constructor() { }

  ngOnInit() {
  }

}
