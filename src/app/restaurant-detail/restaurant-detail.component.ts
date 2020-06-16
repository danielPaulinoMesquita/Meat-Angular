import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { TitleCasePipe } from '@angular/common';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  // Restaurante está sendo buscando pelo id usando o metodo snapshot, que basicamente ele tira uma foto uma vez
  // ou seja ele só faz uma requisição service depois chamado o component
  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id']).subscribe(restaurant=> this.restaurant=restaurant)
  }

}
