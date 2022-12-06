import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
 
  id=""
  productname=""
  productcode=""
  mfgdate=""
  expdate=""
  brand=""
  price=""
  sellername=""
  distributorname=""

  readValues=()=>{
    let data={"id":this.id,"productname":this.productname,"productcode":this.productcode,"mfgdate":this.mfgdate,"expdate":this.expdate,"brand":this.brand,"price":this.price,"sellername":this.sellername,"distributorname":this.distributorname}
    console.log(data)
  }
}
