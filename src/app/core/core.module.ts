import {NgModule} from '@angular/core';
import {CarrinhoService} from '../restaurant-detail/carrinho/carrinho.service';
import {RestaurantService} from '../restaurants/restaurant.service';
import {OrderService} from '../order/order.service';

@NgModule({
  providers : [CarrinhoService, RestaurantService, OrderService]
})
export class CoreModule {
}
