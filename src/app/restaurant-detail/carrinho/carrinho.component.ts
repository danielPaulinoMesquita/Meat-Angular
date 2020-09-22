import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset: 1})
      ]))),
      transition('ready => void', animate('500ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class CarrinhoComponent implements OnInit {

  rowState = 'ready';

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  items(): any [] {
    return this.carrinhoService.items;
  }

  total(): number {
    return this.carrinhoService.total();
  }

  clear() {
    this.carrinhoService.clear();
  }

  removeItem(item: any) {
    this.carrinhoService.removeItem(item);
  }

  addItem(item: any) {
    this.carrinhoService.addItem(item);
  }

}
