import { Component, OnInit } from '@angular/core';
import { PlaceOrder } from 'src/app/models/place.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

 // placeOrderForm;

  //o=new PlaceOrder('','','','','','','','','','','','','')

  constructor(private fb:FormBuilder) { }

 placeOrder=this.fb.group({
  rupee:[null,[Validators.required]],
  paise: [null,[Validators.required]],
  rfName: [null,[Validators.required,Validators.pattern('^[A-Z].*$')]],
  rlName: [null,[Validators.required,Validators.pattern('^[A-Z].*$')]],
  street: [null,[Validators.required]],
  city: [null,[Validators.required]],
  state: [null,[Validators.required]],
  country: [null,[Validators.required]],
  pincode: [null,[Validators.required,Validators.pattern('^\d{6}$')]],
  fName: [null,[Validators.required,Validators.pattern('^[A-Z].*$')]],
  lName: [null,[Validators.required,Validators.pattern('^[A-Z].*$')]],
  phone: [null,[Validators.required,Validators.pattern]],
  email: [null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
 })

  ngOnInit(): void {
  }

  onSubmitForm(data){
    console.log(data)
    //localStorage.placeOrder=JSON.stringify(data)


    if(localStorage.order==undefined){
      var placeItems=[];
      placeItems.push(data)
  
      localStorage.order=JSON.stringify(placeItems)
    }
    else{
      var newItems=JSON.parse(localStorage.order)
      newItems.push(data)
      localStorage.order=JSON.stringify(newItems)
    }
/* 
      var placeItems=[];
      placeItems.push(data)
 
      localStorage.order=JSON.stringify(placeItems) */
   
    }


  }

