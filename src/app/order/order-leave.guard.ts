import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {OrderComponent} from './order.component';
import {Observable} from 'rxjs';
import {el} from '@angular/platform-browser/testing/src/browser_util';

export class OrderLeaveGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(orderComponent: OrderComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                routerState?: RouterStateSnapshot): boolean {
    if (!orderComponent.isOrderCompleted()) {
      return window.confirm("Deseja desistir da compra? ");
    }else {
      return true;
    }
  }
}
