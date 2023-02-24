import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit{
 
	// TODO Task 2
	// For View 1
  result: any

  constructor(private restSvc: RestaurantService){}

  ngOnInit(): void {
    this.restSvc.getCuisineList().then(result => {
      console.log(">>> Results: ", this.result = result)
      })	
  }
}
