import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked ,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() element:{type:string,name:string,content:string}
  @Input() name;
  @ViewChild("heading") header:ElementRef;
  @ContentChild("paragraph") paragraph:ElementRef
  // @Input("srvElement") element:{type:string,name:string,content:string}
// 
  constructor() { 
    console.log("constructore of ServerElement coalled");
    
  }

ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges called ",changes);
    // console.log("onchanges changes ",);
    
    
}
  ngOnInit(): void {
    console.log("ngOnit called");
    console.log("textContent in heading ",this.header.nativeElement.textContents);
    console.log("textContnent in Paragraph ",this.paragraph.nativeElement.textContent);
    
  }
ngDoCheck(): void {
    console.log("DoCheck called");
    
}
ngAfterContentInit(): void {
    console.log("ngAgterContentInit called");
    
}
ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")    
}
ngAfterViewInit(): void {
    console.log("afterViewInit called");
    console.log("textContnent in Paragraph ",this.paragraph.nativeElement.textContent);

}
ngAfterViewChecked(): void {
    console.log("afterViewChecked called")
}
ngOnDestroy(): void {
    console.log("onDestroy called");    
}
}
