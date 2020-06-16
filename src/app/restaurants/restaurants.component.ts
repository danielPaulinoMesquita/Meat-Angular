import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  // Quando declara private ou public, o angular já 
  // declara ou melhor já cria a instancia do RestaurantService
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurants()
    .subscribe(restaurant=> this.restaurants=restaurant);
  }

}
