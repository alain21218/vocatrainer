import { Directive, ViewContainerRef, TemplateRef, OnInit, ComponentFactoryResolver } from '@angular/core';
import { CommentComponent } from './comment/comment.component';

@Directive({
  selector: '[withComments]'
})
export class WithCommentsDirective implements OnInit{

  constructor(private templateRef: TemplateRef<void>,
              private vcr: ViewContainerRef,
            private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.vcr.createEmbeddedView(this.templateRef);

    const cmpFactory = this.cfr.resolveComponentFactory(CommentComponent);
    this.vcr.createComponent(cmpFactory);
  }

}
