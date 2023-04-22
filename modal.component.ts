import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Myserver } from '../shared-models/myserver.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

@Input()
modalInfo: Myserver = new Myserver()

@Output()
closeModalEmitter : EventEmitter <any> = new EventEmitter()

close(){
  this.closeModalEmitter.emit()
}

}
