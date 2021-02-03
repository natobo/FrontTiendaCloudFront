import { Injectable } from '@angular/core';
import { Product } from 'src/app/modules/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Carne', 'La mejor carne para una parrillada', 15000, "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"),
    new Product(2, 'Pan2', 'Recien horneado', 2000),
    new Product(3, 'Pan3', 'Recien horneado', 3000),
    new Product(4, 'Pan4', 'Recien horneado', 4000),
    new Product(5, 'Pan5', 'Recien horneado', 5000),
    new Product(6, 'Pan6', 'Recien horneado', 6000),
    new Product(7, 'Pan7', 'Recien horneado', 7000),
  ]
  constructor() { }
  getProducts(): Product[] {
    // Poblar los productos de un API y retornar un Observable
    return this.products
  }
}
