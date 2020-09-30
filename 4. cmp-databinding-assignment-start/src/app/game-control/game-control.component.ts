import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent  {

  id : any;
  value : number = 0;
  @Output() currentCount = new EventEmitter<{type: string, count: number}>();

  onStart() {
    this.id = setInterval(() => {
      this.value++;
      if(this.value % 2 === 0)
      this.currentCount.emit({type: 'Even', count: this.value});
      else
      this.currentCount.emit({type: 'Odd', count: this.value});
    }, 1000);
  }


  onStop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }


}
