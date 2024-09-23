import { Routes } from '@angular/router';
import path from 'path';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {path:'products/:cat',component:ProductsComponent}
];
