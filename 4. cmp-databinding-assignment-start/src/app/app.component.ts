import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numberElements = [];

  onCountChange(numberData: {type: string, count: number}){
    this.numberElements.push(
      {
        type: numberData.type,
        count: numberData.count
      }
    );

  }



}
