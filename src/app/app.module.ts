import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { ChartsModule } from "@carbon/charts-angular";
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { SimpleBarComponent } from './components/simple-bar/simple-bar.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { DynamicIoModule } from 'ng-dynamic-component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WidgetCommunicationService } from './services/widget-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    SimpleBarComponent,
    DonutChartComponent,
    HeaderComponent,
    SideNavContentComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KtdGridModule,
    ChartsModule,
    DynamicIoModule
  ],
  providers: [WidgetCommunicationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
