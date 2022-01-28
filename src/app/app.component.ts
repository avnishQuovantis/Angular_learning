import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[` h1{color:pink;}`]
})
export class AppComponent {
  name='avnish'
  nameValue=""
  
  changeName(){
    this.name=this.nameValue
  }
}
