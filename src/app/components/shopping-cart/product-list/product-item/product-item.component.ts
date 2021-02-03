import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modules/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor() {
    this.productItem = new Product(1000001, 'xd');
  }

  ngOnInit(): void {

  }

}
