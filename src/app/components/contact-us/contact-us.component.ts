import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  public contactModel=new Contact('','','');

  ngOnInit(): void {
  }

 /*  onSubmitForm(data){
    console.log(data)
  } */

}
