import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  items():any[]{
    return this.carrinhoService.items;
  }

  total(): number {
    return this.carrinhoService.total();
  }

  clear(){
    this.carrinhoService.clear();
  }

  removeItem(item:any){
    this.carrinhoService.remove(item);
  }

  addItem(item:any){
    this.carrinhoService.addItem(item);
  }

}
