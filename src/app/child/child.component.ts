import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() inputText:string = ''; //use of @Input decorator to allow inputText to be bindable from parent component
@ Output() outputValue: EventEmitter<string> = new EventEmitter<string>(); //create an object of the eventmitter type, data type string
message: string ="";

sendMessage(text:string){
  this.message = text;
  this.outputValue.emit(this.message);
}

}
