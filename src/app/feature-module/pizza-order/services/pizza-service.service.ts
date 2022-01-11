import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PizzaItemInfo } from '../models/pizza-item-info';

@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {
private baseApiPath = environment.endPoints.baseApiPath;

  constructor(private httpClient: HttpClient){}

  getPizzaSize(){
   return this.httpClient.get(this.baseApiPath + 'PizzaBase/GetPizzaSize',{
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  }) as Observable<PizzaItemInfo[]>;
  }

  getPizzaCrust(){
    return this.httpClient.get(this.baseApiPath + 'PizzaBase/GetPizzaCrust',{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    }) as Observable<string[]>;
  }

  getToppings(){
    return this.httpClient.get(this.baseApiPath + 'Ingredients/GetIngredients',{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    }) as Observable<PizzaItemInfo[]>;
  }

  getNonPizzaItems(){
    return this.httpClient.get(this.baseApiPath + 'NonPizzaItem/GetNonPizzaItems',{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    }) as Observable<PizzaItemInfo[]>;
  }
}
