import {ModuleWithProviders, NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarrinhoService} from '../restaurant-detail/carrinho/carrinho.service';
import {RestaurantService} from '../restaurants/restaurant.service';
import {OrderService} from '../order/order.service';
import {SnackbarComponent} from '../messages/snackbar/snackbar.component';
import {NotificationService} from '../messages/notification.service';
import {LoginService} from '../security/login/login.service';
import {LoggedInGuard} from '../security/loggedin.guard';
import {OrderLeaveGuard} from '../order/order-leave.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../security/auth.interceptor';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, SnackbarComponent,
  FormsModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers : [CarrinhoService,
                    RestaurantService,
                    OrderService,
                    NotificationService,
                    LoginService,
                    LoggedInGuard,
                    OrderLeaveGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
    };
  }
}
