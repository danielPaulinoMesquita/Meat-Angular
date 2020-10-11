import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {OrderItemsComponent} from './order-items/order-items.component';
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {OrderLeaveGuard} from './order-leave.guard';

const ROUTES: Routes = [
  {path: '', component: OrderComponent, canDeactivate: [OrderLeaveGuard]}
];

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {

}
