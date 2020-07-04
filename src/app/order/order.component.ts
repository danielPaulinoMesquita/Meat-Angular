import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CarrinhoService } from 'app/restaurant-detail/carrinho/carrinho.service';
import { CarrinhoItem } from 'app/restaurant-detail/carrinho/carrinho-item';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //estamos mocando os dados, mas esse valor poderia ser buscado em algum banco
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MONEY' },
    { label: 'Cartão de Debito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' }
  ];

  constructor(private orderService: OrderService) { 
  }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue();
  }

  //itens que estão no carrinho
  carItems():CarrinhoItem[]{
    return this.orderService.carrinhoItens();
  }

  // aumentra a quantidade do iten em questão
  increaseQty(item:CarrinhoItem){
    this.orderService.increaseQty(item);
  }

  // diminui a quantidade do iten em questão
  decreaseQty(item: CarrinhoItem){
    this.orderService.decreaseQty(item);
  }

  remove(item:CarrinhoItem){
    this.orderService.remove(item);
  }

}
