import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzaItemInfo } from '../../models/pizza-item-info';
import { PizzaServiceService } from '../../services/pizza-service.service';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss']
})

export class PizzaOrderComponent implements OnInit {
  public pizzaSizeArray: PizzaItemInfo[] = [];
  public pizzaCrustArray: string[] = [];
  public toppingsArray: any[] = [];
  public drinksArray:any[] = [];
  public nonPizzaItemsArray:any[] = [];
  public pizzaForm: FormGroup;
  constructor(private service:PizzaServiceService,
    private formBuilder: FormBuilder) { 
      
    this.pizzaForm = this.formBuilder.group({
      selectedPizzaSize: ['', Validators.required],
      selectedCrust:['', Validators.required],
      selectedToppings: this.formBuilder.array([]),
      selectedDrinks: this.formBuilder.array([])
    });
    }

  ngOnInit(): void {
    this.service.getPizzaSize().subscribe(response => {
    this.pizzaSizeArray = response;
    });

    this.service.getPizzaCrust().subscribe(response => {
      this.pizzaCrustArray= response;
    });

    this.service.getToppings().subscribe(response => {
      this.toppingsArray =  response.map(x => {
         return {label: x.itemName , value: x.itemRate}
       });
    });

    this.service.getNonPizzaItems().subscribe(response => {
        response.map(x => {
        if(x.isSoftDrink === true){
          this.drinksArray.push( {label:x.itemName,value: x.itemRate});
        }
        else{
          this.nonPizzaItemsArray.push({label:x.itemName, value: x.itemRate});
        }
      });
    });
  }

  onPayment(){

  }

  onToppingsCheck($event:any) {
    // const array = this.pizzaForm.controls["toppings"] as FormArray;
  
    // if(isChecked) {
    //   array.push(new FormControl(itemName));
    // } else {
    //   let index = array.controls.findIndex(x => x.value == itemName)
    //   array.removeAt(index);
    // }
  }

  onDrinksCheck($event:any){}

  onItemsCheck($event:any){}
}
