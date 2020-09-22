import { MenuItem } from "../menu-item/menu-item.model";
import { CarrinhoItem } from "./carrinho-item";
import { Injectable } from "@angular/core";
import {NotificationService} from '../../messages/notification.service';

@Injectable()
export class CarrinhoService {

    items: CarrinhoItem[] = [];

    constructor(private  notificationService: NotificationService) {
    }

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((itemAdicionado) => itemAdicionado.menuItem.id === item.id);
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CarrinhoItem(item));
        }

        this.notificationService.notify(`Você adicionou um item ${item.name}`);
    }

    //aumenta a quantidade
    increaseQty(item: CarrinhoItem) {
        item.quantity = item.quantity + 1;
    }

    //diminui a quantidade
    decreaseQty(item: CarrinhoItem){
        item.quantity= item.quantity-1;
        if(item.quantity===0){
            this.removeItem(item);
        }
    }

    //remove o item
    removeItem(item: CarrinhoItem) {
      this.items.splice(this.items.indexOf(item), 1);
      this.notificationService.notify(`Você removeu um item ${item.menuItem.name}`);

    }

    total(): number {
        return this.items.
            map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }
}
