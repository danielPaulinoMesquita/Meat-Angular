import {ModuleWithProviders, NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarrinhoService} from '../restaurant-detail/carrinho/carrinho.service';
import {RestaurantService} from '../restaurants/restaurant.service';
import {OrderService} from '../order/order.service';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent, CommonModule,
  FormsModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers : [CarrinhoService, RestaurantService, OrderService]
    };
  }
}
