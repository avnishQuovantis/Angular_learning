import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server",name:"Test server",content:"just a server"}];
  
  
  onServerCreated(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    
  }

  onBluePrintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  deleteElement(index){
    console.log(this.serverElements,index);
    
    this.serverElements.splice(index,1)
  }


  onChangeFirst(){
    this.serverElements[0].name="Changed!"
  }

  // onIntervalFired(fireNumber:number){
  //   console.log(fireNumber);
    
  // }
}
