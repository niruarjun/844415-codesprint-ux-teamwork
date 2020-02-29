import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes:Routes=[
/*   {path:'home',component: Component},
  {path:'cart',component: CartComponent},
  {path:'products/:id',component: ProductsComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'subcat/:id',component:SubCatComponent} */
  {path:'',component:LandingPageComponent},
  {path:'contact',component: ContactUsComponent},
  {path:'placeOrder', component: PlaceOrderComponent},
  {path:'viewOrder', component: ViewOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
