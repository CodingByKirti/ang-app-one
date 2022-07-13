import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
message: string ="Hello Guest";
fname:string=""
lname : string =""
prodInfo:string=""
wishMsg :string=""

  constructor() { }

  ngOnInit(): void {

  }

  changeMessage():void 
  {
    this.message ="Hello Dear!!! "
    this.fname="Kirti"
    this.lname="Sharma"
  }
  
  addProd(event)
  {
    this.prodInfo = event.target.value+ " is added to the cart"
  }

  getWish(d)
  {
    this.wishMsg= "your wish : "+ d.value +" will come true in next 6 months"
  }
}
