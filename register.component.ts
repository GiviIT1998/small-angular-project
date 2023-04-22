import { Component, EventEmitter, Output } from '@angular/core';
import { Myserver } from '../shared-models/myserver.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  mys : Myserver = new Myserver()


  @Output()
  addServeremitter : EventEmitter <Myserver> = new EventEmitter()

  add(){
    this.addServeremitter.emit(this.mys)
    this.mys =  new Myserver()
  }


  
}
