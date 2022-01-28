import { Directive,ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input("appBetterHighlight") defaultColor:string="transparent"
  @Input() highlightColor:string="blue"

  ngOnInit(): void {
      this.backgroundColor=this.defaultColor
  }
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent'
  constructor(private elementRef:ElementRef  ,private renderer:Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData:Event){ 
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue")
    this.backgroundColor=this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){ 
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","transparent")
    this.backgroundColor=this.defaultColor
  }
}
