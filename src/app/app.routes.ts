import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'products/:cat',component:ProductsComponent},
    {path:'category' , component:CategoryComponent},
    {path: 'admin' , component:AdminComponent},
    {path:'details/:id',component:DetailsComponent},
    {path: 'admin/:id' , component:AddProductComponent},
    {path: 'add-category/:id' , component:AddCategoryComponent},
    {path:'**' , component:NotFoundComponent} ,
];
