import {Component, OnInit} from '@angular/core';
import {RadioOption} from 'app/shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CarrinhoItem} from 'app/restaurant-detail/carrinho/carrinho-item';
import {Order, OrderItem} from './order.model';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

  // estamos mocando os dados, mas esse valor poderia ser buscado em algum banco
  delivery: number = 8;

  orderForm: FormGroup;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MONEY' },
    { label: 'Cartão de Debito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' }
  ];

  constructor(private orderService: OrderService,
              private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [ Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('' , [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo });
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value){
      return {emailsNoMatch: true};
    }
    return undefined;
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  // itens que estão no carrinho
  carItems(): CarrinhoItem[] {
    return this.orderService.carrinhoItens();
  }

  // aumentra a quantidade do iten em questão
  increaseQty(item: CarrinhoItem) {
    this.orderService.increaseQty(item);
  }

  // diminui a quantidade do iten em questão
  // tslint:disable-next-line:one-line
  decreaseQty(item: CarrinhoItem){
    this.orderService.decreaseQty(item);
  }

  remove(item: CarrinhoItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.carItems()
      .map((item: CarrinhoItem) => new  OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      console.log(`Compra concluida: ${orderId}`);
      this.orderService.clear();
    });
    console.log(order);
  }

}
