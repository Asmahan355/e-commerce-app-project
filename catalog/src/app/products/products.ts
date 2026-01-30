import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  
products !: Array<any>;

  constructor() { }
  ngOnInit(): void {
    // Initialization logic here
    this.products = [
      {id:1,name:"Computer",price:45000},
      {id:2,name:"Mobile",price:25000},
      {id:3,name:"Tablet",price:15000},
    ];
  }
  handleDeleteProduct(p: any){

  }
}
