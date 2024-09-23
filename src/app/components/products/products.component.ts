import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,NgStyle,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  private readonly _ApiService = inject(ApiService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)

  allProducts:Iproduct[] = []
  filteredProducts:Iproduct[] = []
  categories:any[] = []
  cat:string ='';
  selectedCategory: string = '';

  ngOnInit(): void {
    this._ApiService.Get_All_Products().subscribe({
      next:(res)=>{
        console.log(res);
        this.allProducts = res
        this.filteredProducts = this.allProducts
        this._ApiService.Get_Categories().subscribe({
      next:(res)=>{
        console.log(res);
        this.categories = res
        this._ActivatedRoute.params.subscribe((params)=>{
      this.cat = params['cat']
      this.selectedCategory = this.cat
      this.filterByCategory();
      console.log(this.cat);
    })
      }
    })
      }
    })

  }

  
  filterByCategory(){
    if(this.cat != 'all')
    this.filteredProducts = this.filteredProducts.filter(product => product.category.name === this.cat)
  }

  onCategoryChange(newCategory: string) {
    
  }

}
