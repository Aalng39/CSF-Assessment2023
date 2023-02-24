import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurant } from '../models';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit{
 
	// TODO Task 4 and Task 5
	// For View 3

  params$!: Subscription
  rest!: Restaurant
  form!: FormGroup
  
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private restSvc: RestaurantService){ }

  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.subscribe(
      (params) => {
        const name = params['name']
        this.restSvc.getRestaurant(name)
          .then(result => {
            console.info('>>> Restaurant Details: ', this.rest = result)
          })
          .catch(error => {
            console.error('>> error: ', error)
          })
      }
    )
    
    this.form = this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      rating: this.fb.control<string>('', [Validators.required]),
      comment: this.fb.control<string>('', [Validators.required])
    })
  }

  submit(){

  }
}
