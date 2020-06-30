import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoItem } from 'app/restaurant-detail/carrinho/carrinho-item';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CarrinhoItem[];

  @Output() increaseQty = new EventEmitter<CarrinhoItem>();

  @Output() decreaseQty = new EventEmitter<CarrinhoItem>();
  
  @Output() remove = new EventEmitter<CarrinhoItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item:CarrinhoItem){
    this.increaseQty.emit(item);
  }
  
  emitDecreaseQty(item:CarrinhoItem){
    this.increaseQty.emit(item);
  }

  emitRemove(item:CarrinhoItem){
    this.increaseQty.emit(item);
  }
}
