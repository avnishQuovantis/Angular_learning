import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition:boolean){
    if(condition){
      console.log(this.vRef);
      this.vRef.createEmbeddedView(this.templateRef)
    }else{
      this.vRef.clear()
    }
  }
  constructor(private templateRef:TemplateRef<any>,private vRef:ViewContainerRef) { }
}
