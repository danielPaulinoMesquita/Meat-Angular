import { Injectable } from "@angular/core";
import { CarrinhoService } from "app/restaurant-detail/carrinho/carrinho.service";
import { CarrinhoItem } from "app/restaurant-detail/carrinho/carrinho-item";
import {Order} from './order.model';
import {Observable} from 'rxjs';
import {Headers, Http, RequestOptions} from '@angular/http';
import {MEAT_API} from '../app-api';

@Injectable()
export class OrderService{
    constructor(private carrinhoService: CarrinhoService, private http: Http) {

    }

    itemsValue(): number {
        return this.carrinhoService.total();
    }

    carrinhoItens():CarrinhoItem[]{
        return this.carrinhoService.items;
    }

    increaseQty(item:CarrinhoItem){
        this.carrinhoService.increaseQty(item);
    }

    decreaseQty(item: CarrinhoItem){
        this.carrinhoService.decreaseQty(item);
    }

    remove(item: CarrinhoItem){
        this.carrinhoService.removeItem(item);
    }

    clear() {
      this.carrinhoService.clear();
    }

  checkOrder(order: Order): Observable<string> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.post(`${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({headers: headers}))
        .map(response => response.json());
  }
}
