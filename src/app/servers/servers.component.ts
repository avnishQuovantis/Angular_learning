import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //for 
  templateUrl:"./servers.component.html",
  styleUrls: ['./servers.component.css'],
  // selector:'.app-servers',   for class selector
  //selector:'[app-server]' for attribute selector
  // template: '<app-server></app-server><app-server></app-server>',
  // styles:["h3{}"] // used to add stoyle  
})
export class ServersComponent implements OnInit {
  allowNewServer=false
  serverCreationStatus="server is not created yet"
  serverCreated=false
  serverName=" test"
  servers=["Test1","Test2"]
  onCreateServer(){
    this.servers.push(this.serverName)
  }
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
  }

  ngOnInit(): void {
  }
  onUpdateServer(e){
    console.log(e.target.value);
    this.serverName=(<HTMLInputElement> e.target).value
  }
}
