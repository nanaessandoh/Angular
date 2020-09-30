import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  allowResetButton: boolean = false;


onEnableResetButton(event: Event){
  this.username = (<HTMLInputElement>event.target).value;
  if(this.username)
    this.allowResetButton = true;
  else
    this.allowResetButton = false;
}

onResetUsername(){
  this.username = '';
  this.allowResetButton = false;
}

}
