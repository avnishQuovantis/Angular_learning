import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //custome event
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  @Output("bpCreated") blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  @Output() variable1=""
  newServerName = '';
  newServerContent = '';

  @ViewChild("serverContentInput") serverContentInput:ElementRef

  onAddServer(serverName:HTMLInputElement) {
    console.log(serverName);
    this.serverCreated.emit({
      serverName:serverName.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }
  onAddBlueprint(serverName:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:serverName.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
