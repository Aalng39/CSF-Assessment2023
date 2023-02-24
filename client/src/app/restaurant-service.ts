import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { Restaurant, Comment } from './models'

@Injectable({
	providedIn: 'root'
  })
  
export class RestaurantService {

	rest!: Restaurant

	constructor(private http: HttpClient){}

	// TODO Task 2 
	// Use the following method to get a list of cuisines
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public getCuisineList(): Promise<any>{
		// Implememntation in here
			return firstValueFrom(
			  this.http.get<any>("api/cuisines"))
	}

	// TODO Task 3 
	// Use the following method to get a list of restaurants by cuisine
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public getRestaurantsByCuisine(cuisine: string): Promise<any> {
		// Implememntation in here
		return firstValueFrom(
			this.http.get<any>(`api/${cuisine}/restaurants`))
	}
	
	// TODO Task 4
	// Use this method to find a specific restaurant
	// You can add any parameters (if any) 
	// DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
	public getRestaurant(name: string): Promise<Restaurant> {
		// Implememntation in here
		const params = new HttpParams()
      	.set('restaurant', name);

    	return firstValueFrom(
      	this.http.get<Restaurant>("api/restaurants", {params: params}))
	}

	// TODO Task 5
	// Use this method to submit a comment
	// DO NOT CHANGE THE METHOD'S NAME OR SIGNATURE
	// public postComment(comment: Comment): Promise<any> {
	// 	// Implememntation in here

	// }
}
