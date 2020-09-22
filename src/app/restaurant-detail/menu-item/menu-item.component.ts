import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0 , transform: 'translateY(-20px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

  // quando um component vai receber um valor/propriedade do component parent
  @Input() menuItem: MenuItem;

  // quando o component quer mandar ou notificar o component parent usa-se
  @Output() add= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // metodo na qual vai acionar o evento para o output
  emitAddEvent(){
    this.add.emit(this.menuItem);
  }

}
