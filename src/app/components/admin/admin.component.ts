import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
