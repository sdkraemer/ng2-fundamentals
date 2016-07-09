import { Directive, OnInit, ElementRef, Input, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

// declare var $ : any;

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') searchModalId : string;
  
  constructor(el: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
    this.el = el.nativeElement;
   
    this.el.addEventListener('click', e => {
      // this modal function doesn't exist on jquery,
      // it's added by bootstrap, so adding jquery
      // typings won't help things in general
      // jquery typings added with "npm i typings -g"
      // and then  "typings install dt~jquery --save --global"
      this.$(`#${this.searchModalId}`).modal({})
    })

  }
  
  ngOnInit() {
  }
}