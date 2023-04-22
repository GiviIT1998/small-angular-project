import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Myserver } from 'src/app/shared-models/myserver.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  @Input()
  cardInfo : Myserver =  new Myserver()
  changestatus(){
    if(this.cardInfo.status == "enable"){
      this.cardInfo.status = "disable"
    }
    else{
      this.cardInfo.status = "enable"
    }
  }
  @Output()
  showModalEmitter : EventEmitter<any> = new EventEmitter()
  showmore(){
      this.showModalEmitter.emit(this.cardInfo)
  }

 
 
}
