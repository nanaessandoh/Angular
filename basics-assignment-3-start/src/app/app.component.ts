import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = 'Secret Password = tuna';
  passwordDisplay: boolean = true;
  myNumber: number = 1;
  outputArray: number [] = [];


  onButtonClick(){
    // toggle of password
    this.passwordDisplay = this.passwordDisplay ? false : true;
    // add number to the array
    this.outputArray.push(this.myNumber)
    // increase the number
    this.myNumber++;
    console.log(this.outputArray);
  }
  
}





