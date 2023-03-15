import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class WidgetCommunicationService  {
  constructor() {}
  private dataSource = new BehaviorSubject<any>(null);
  public data = this.dataSource.asObservable();

  public sendDataToSubscribers(data: any) {
    this.dataSource.next(data);
  }
}