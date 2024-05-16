import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import path from 'path';
import { Component } from '@angular/core';
import { ProductComponentComponent } from './products/product-component/product-component.component';

export const routes: Routes = [
    
    {path:"signup",component:SignupComponent,title:"SignUP"},
    {path:"login",component:LoginComponent,title:"Login"},
    {path:"products",component:ProductsComponent,title:"Products",
        children:[
            {path:":pid",component:ProductComponentComponent,title:"Product Data"}
        ],
    },
    {path:"",component:NavbarComponent,title:"Home"}
];
