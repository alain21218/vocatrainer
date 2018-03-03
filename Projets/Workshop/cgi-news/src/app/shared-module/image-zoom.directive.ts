import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[imageZoom]'
})
export class ImageZoomDirective {
  @Input("imageZoom") zoom;

  image:any;
  
  constructor(private ref:ElementRef) { }

  ngAfterContentInit() {
    this.image = this.ref.nativeElement.querySelector("img");
    const wrapper = this.image.parentNode;

    wrapper.style.overflow = "hidden";

    // let sneaky = document.createElement("div");
    // sneaky.style.overflow = "hidden";
    // sneaky.appendChild(this.image);
    // wrapper.appendChild(sneaky);
    
    this.image.style.transition = "transform .5s ease";
  }
  
  @HostListener('mouseenter')
  public zoomIn() {
    this.image.style.transform = `scale(${this.zoom})`;
  }
  
  @HostListener('mouseleave')
  public zoomOut(){
    this.image.style.transform = "scale(1)";
  }
}
