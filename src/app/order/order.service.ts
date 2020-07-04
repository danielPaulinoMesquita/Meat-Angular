import { Injectable } from "@angular/core";
import { CarrinhoService } from "app/restaurant-detail/carrinho/carrinho.service";
import { CarrinhoItem } from "app/restaurant-detail/carrinho/carrinho-item";

@Injectable()
export class OrderService{
    constructor(private carrinhoService:CarrinhoService){

    }

    itemsValue():number{
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

}