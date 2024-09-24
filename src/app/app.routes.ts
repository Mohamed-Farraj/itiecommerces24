import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
//import { AddProductComponent } from './components/add-product/add-product.component';
//import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'products/:cat',component:ProductsComponent},
    {path:'category' , component:CategoryComponent},
    {path: 'admin' , component:AdminComponent},
];
