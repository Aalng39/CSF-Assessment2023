import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-restaurant-cuisine',
  templateUrl: './restaurant-cuisine.component.html',
  styleUrls: ['./restaurant-cuisine.component.css']
})
export class RestaurantCuisineComponent implements OnInit {
	
	// TODO Task 3
	// For View 2

  
  params$!: Subscription
  result!: any

  constructor(private activatedRoute: ActivatedRoute, private restSvc: RestaurantService){ }

  ngOnInit(): void {

    this.params$ = this.activatedRoute.params.subscribe(
      (params) => {
        const cuisine = params['cuisine']
        this.restSvc.getRestaurantsByCuisine(cuisine)
          .then(result => {
            console.info('>>> Restaurants By Cuisine: ', this.result = result)
          })
          .catch(error => {
            console.error('>> error: ', error)
          })
      }
    )
  }

}
