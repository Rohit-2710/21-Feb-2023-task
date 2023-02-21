import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  products: Product[] = [
    { pname: 'televison', price: 17999 },
    { pname: 'air conditioner', price: 32499 },
    { pname: 'smartphone', price: 24299 },
    { pname: 'washing machine', price: 37999 },
    { pname: 'dish washer', price: 52499 },

  ];

  productNames = this.products.map((product) => product.pname);
  filteredProducts = this.products.filter((product) => product.price > 30000);
  totalPrice = this.filteredProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );
  
  

  
 

}

export interface Product {
  pname: string;
  price: number;
}
