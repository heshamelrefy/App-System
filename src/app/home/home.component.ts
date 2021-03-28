import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs'
import { AuthService } from '../auth.service';
declare var $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
red="red";
x:number=1
allData=[]
searchText;

constructor(private _AuthService:AuthService) {
  _AuthService.data().subscribe((data)=>{
    //  console.log(data)
    this.allData=data.message
    
    console.log(this.allData);
    
    
  })  
   
  // id="itmOne"
}
value1
value2
getModifuyGbna(){
  // this.eventInfo=e.target
  // let y= $(this.eventInfo).text()
  // // console.log(this.eventInfo);
  // console.log(y);
  
  if (this.onchangeOne == true) {
  let v1=document.getElementById("itmOne").textContent;
  this.value1=v1
  console.log(this.value1);
}


}
getModifuyKatshab(){
if (this.onchangeTwo == true) {
  let v2=document.getElementById("itmTwo").textContent;
  this.value2=v2
  console.log(this.value2);
}




}

newarrayOfClick=[]
names
prices
totals
eventInfo
showAll(){
 
  // this.show(this.names,this.prices)
  let product={
    productName:this.names,
    productPrice:this.prices,
    productTotal:this.prices
  }
 
  this.newarrayOfClick.push(product)
 
  console.log(this.productList);
  
  //  this.displayProducts(this.productList);
  // this.FormData();
  this.displayShow(this.newarrayOfClick);
  
  $("#Modifuy").modal("hide");
  this.onchangeOne=false;
  this.onchangeTwo=false
 
}
show(name,price){
  this.names=name
  this.prices=price
  
  console.log(this.names,this.prices);
  
  
  
  // this.totals=product.productPrice
  
  
  

}
condition = false;
displayShow(anyArray){
  let cartona=""
  for (let i = 0; i < anyArray.length; i++) {
    cartona+=`
    <tr >
    <th style="width: 65%" scope="row"><i data-toggle="modal" data-target="#exampleModal" style="font-size: 15px !important;cursor: pointer;border: 1px solid rgba(151, 153, 152, 0.575);padding: 3px;" class="fas fa-pen-square"></i> ${anyArray[i].productName}
    <p *appUnless="condition"  class="bg-dark text-white" style="font-size: 10px; width: 20%;">${this.value1}+</p>
    <p *appUnless="condition" class="bg-dark text-white" style="font-size: 10px; width: 20%;">${this.value2}+</p>
    
    </th>
    <td >${anyArray[i].productPrice} $</td>
    <td  ><button  style="background-color: white;border:.5px solid rgb(189, 186, 186,.7);box-shadow: none;"   class="px-1">-</button><button style="background-color: white;border:.5px solid rgb(189, 186, 186,.7);box-shadow: none;" class="px-2 ">${this.x}</button><button id="pls"  class="px-1"  style="background-color: white;border:.5px solid rgb(189, 186, 186,.7);box-shadow: none;" id="plus">+</button></td>
    <td >${anyArray[i].productPrice}$  </td>
    
  </tr>
  <div class="line" style="width: 100%;height: .3px; background-color: rgb(212, 207, 207);"></div>
 
    
  
    `
    
  }
  document.getElementById("cart-data").innerHTML = cartona;
}
color="rgb(76, 118, 131)"
onchangeOne:boolean=false
onchangeTwo:boolean=false
changing(){
  this.onchangeOne=false;
  this.onchangeTwo=false
}
changeOne(){
  if (this.onchangeOne == true) {
    this.onchangeOne = false
  }
  else
  {
    this.onchangeOne = true
  }

   }
  changeTwo(){
    if (this.onchangeTwo == true) {
      this.onchangeTwo = false
    }
    else
    {
      this.onchangeTwo = true
    }
  }
    
      




productList =[]


     addItem=new FormGroup({
       product:new FormControl("",[Validators.required,Validators.pattern(/^[a-z]{3,8}$/)]),
       price:new FormControl("",[Validators.required]),
       quantity:new FormControl("",[Validators.required]),
     })
    
     total
     quantity
     price
      
     FormData(){
   
   let products={
      product:this.addItem.value.product,
      price:this.addItem.value.price,
      quantity:this.addItem.value.quantity,
       total:this.addItem.value.quantity*this.addItem.value.price
    }
    console.log(products);
    
    
    
    // console.log(this.addItem.value);
    this.productList.push(products)
    this.total=this.addItem.value.quantity*this.addItem.value.price;
    this.quantity=this.addItem.value.quantity
    console.log(this.productList);
    
    //  localStorage.setItem("ourProducts" , JSON.stringify(this.productList));
    this.displayProducts(this.productList);
    $("#AddItem").modal("hide");
    
         this.addItem.reset();
       
       
       

     }
     local(){
      if (localStorage.getItem("ourProducts") == null) {
        this.productList=[]
      }
      else
      {
        this.productList = JSON.parse( localStorage.getItem("ourProducts"));
        this.displayProducts(this.productList);
        
      }
     }
    

     displayProducts(anyArray){
      let cartona="";
      let index
      
      this.quantity
        for (let i = 0; i < anyArray.length; i++) {
          cartona+=`
          <tr >
          <th style="width: 65%" scope="row"><i style="font-size: 15px !important;border: 1px solid rgba(151, 153, 152, 0.575);padding: 3px;" class="fas fa-pen-square"></i> ${anyArray[i].product}
          <p class="bg-dark text-white" style="font-size: 10px; width: 20%;">10$ جبنه+</p>
          </th>
          <td >${anyArray[i].price} $</td>
          <td  ><button id="low" style="background-color: white;border:.5px solid rgb(189, 186, 186,.7);box-shadow: none;"   class="px-1">-</button><button style="background-color: white;border:.5px solid rgb(189, 186, 186,.7);box-shadow: none;" class="px-2 ">${anyArray[i].quantity}</button><button id="pls"  class="px-1"  style="background-color: white;border:.5px solid rgb(189, 186, 186,.7);box-shadow: none;" id="plus">+</button></td>
          <td >${anyArray[i].total}$  </td>
          
        </tr>
        <div class="line" style="width: 100%;height: .3px; background-color: rgb(212, 207, 207);"></div>
       
          
        
          `
         index=i
        }
        
         document.getElementById("cart-data").innerHTML=cartona;
        // // this.quantity=anyArray[index].quantity
        // document.getElementById("icon").addEventListener("click",()=>{
        //   this.delete(anyArray[index]);
        // })
        // document.getElementById("low").addEventListener("click",()=>{
        //   if (this.productList[index].quantity >=1) {
        //     this.quantity-=1
        //     this.total=this.price*this.quantity
        //   }
        // })
    
     }
     
     onSave(){
       alert("hello");
     }
  
     delete(index){
      this.productList.splice( index, 1);
      localStorage.setItem("ourProducts" , JSON.stringify(this.productList) );
      this.displayProducts(this.productList);
     }
    shipCondition:boolean=false
     shippingHoldTakeAway(){
      this.shipCondition=false;
     }
     shippingHoldDelivary(){
      this.shipCondition=true;
     }

  

  ngOnInit(): void {
    // this.local()
  }

}
