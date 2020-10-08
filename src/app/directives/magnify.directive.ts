import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {

  private defaultFontSize;
  private counter = 0;

  constructor(private element: ElementRef) {
    console.log('magnify', element);
    this.defaultFontSize = window.getComputedStyle(element.nativeElement).fontSize; // get the fontsize from elemnt
    this.defaultFontSize = this.defaultFontSize.substring(0, this.defaultFontSize.length - 2); // its end with px, lets cut it
    this.defaultFontSize = Number(this.defaultFontSize); //parsing

    this.element.nativeElement.style.cursor = "zoom-in"; // change cursor to zoom
    this.element.nativeElement.style.userSelect = "none"; // disable selection
  }

  private magnify(element) {
    let fontSizeArray = [
      this.defaultFontSize,
      this.defaultFontSize + 3,
      this.defaultFontSize + 6,
      this.defaultFontSize + 12,
    ];
    let newSize = fontSizeArray[++this.counter % fontSizeArray.length]
    element.nativeElement.style.fontSize = String(newSize + 'px');
  }

  @HostListener('click') onClick() {
    this.magnify(this.element); //onclick : call the function
  }
  /**
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.cursor = "zoom-in"; // change cursor to zoom
    this.element.nativeElement.style.userSelect = "none"; // disable selection
  }
  */
};
