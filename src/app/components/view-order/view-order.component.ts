import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  public viewOrder=[]

  constructor() { }

  ngOnInit(): void {
    this.viewOrder=JSON.parse(localStorage.order)
  }

}
