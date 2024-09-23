import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  private readonly _ApiService = inject(ApiService)

  allProducts:Iproduct[] = []
  filteredProducts:Iproduct[] = []
  categories:any[] = []

  ngOnInit(): void {
    this._ApiService.Get_All_Products().subscribe({
      next:(res)=>{
        console.log(res);
        this.allProducts = res
        this.filteredProducts = this.allProducts
      }
    })

    this._ApiService.Get_Categories().subscribe({
      next:(res)=>{
        console.log(res);
        this.categories = res
      }
    })
  }

}
