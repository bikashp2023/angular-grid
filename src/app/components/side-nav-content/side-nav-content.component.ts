import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetCommunicationService } from 'src/app/services/widget-communication.service';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { SimpleBarComponent } from '../simple-bar/simple-bar.component';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavContentComponent implements OnInit {


  constructor( private widgetService:WidgetCommunicationService) { }

  ngOnInit(): void {
  }

  addVisualization(item:string) {
    let component;
    switch(item) {
      case "simple_bar": {
        component = SimpleBarComponent;
        break;
      }
      case "donut": {
        component = DonutChartComponent;
        break;
      }
      case "line": {
        component = LineChartComponent;
        break;
      }
      default: {
        component = SimpleBarComponent;
      }
    }
    this.widgetService.sendDataToSubscribers(component);
  }


}
