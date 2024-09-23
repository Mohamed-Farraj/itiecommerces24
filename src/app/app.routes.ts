import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {path:'products/:cat',component:ProductsComponent},
    {path:'category' , component:CategoryComponent},
];
