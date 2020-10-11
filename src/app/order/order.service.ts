import { Injectable } from '@angular/core';
import { CarrinhoService } from 'app/restaurant-detail/carrinho/carrinho.service';
import { CarrinhoItem } from 'app/restaurant-detail/carrinho/carrinho-item';
import {Order} from './order.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MEAT_API} from '../app-api';
import {LoginService} from '../security/login/login.service';

@Injectable()
export class OrderService {
    constructor(private carrinhoService: CarrinhoService,
                private http: HttpClient) {
    }

    itemsValue(): number {
        return this.carrinhoService.total();
    }

    carrinhoItens(): CarrinhoItem[] {
        return this.carrinhoService.items;
    }

    increaseQty(item: CarrinhoItem) {
        this.carrinhoService.increaseQty(item);
    }

    decreaseQty(item: CarrinhoItem) {
        this.carrinhoService.decreaseQty(item);
    }

    remove(item: CarrinhoItem) {
        this.carrinhoService.removeItem(item);
    }

    clear() {
      this.carrinhoService.clear();
    }

  checkOrder(order: Order): Observable<string> {
     return this.http.post<Order>(`${MEAT_API}/orders`, order)
       .map( order => order.id);
  }
}
