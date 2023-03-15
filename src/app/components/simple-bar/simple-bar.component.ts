import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-bar',
  templateUrl: './simple-bar.component.html',
  styleUrls: ['./simple-bar.component.css']
})
export class SimpleBarComponent implements OnInit {

  data = [
    {
      "group": "Qty",
      "value": 65000
    },
    {
      "group": "More",
      "value": 29123
    },
    {
      "group": "Sold",
      "value": 35213
    },
    {
      "group": "Restocking",
      "value": 51213
    },
    {
      "group": "Misc",
      "value": 16932
    }
  ];
  options = {
    "title": "Vertical simple bar (discrete)",
    "axes": {
      "left": {
        "mapsTo": "value"
      },
      "bottom": {
        "mapsTo": "group",
        "scaleType": "labels"
      }
    },
    "height": "350px"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
