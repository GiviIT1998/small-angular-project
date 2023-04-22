import { Component } from '@angular/core';
import { Myserver } from './shared-models/myserver.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bts';

  mys:Myserver = new Myserver()
  arr:Myserver[] = []
  clicked:boolean = false;
  deletee: any;
  

  addServersubscriber(x:Myserver){
  this.arr.push(x)

  }
  mInfo:Myserver =  new Myserver()
  showModalSubscriber(e:any){
    this.clicked = true
    this.mInfo = e
  }

  closeModalSubscriber(){
    this.clicked =  false
  }


}
