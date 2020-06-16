import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

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
