import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';
  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }

  changeColor(color: string){
    this.element.nativeElement.style.color = color;
  }

}
