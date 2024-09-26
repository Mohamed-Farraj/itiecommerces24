import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CommonModule, CurrencyPipe, NgIf, NgStyle } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, NgStyle, FormsModule,SweetAlert2Module,RouterLink,NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private readonly _ApiService = inject(ApiService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  @Input() admin:boolean = false;
  allProducts: Iproduct[] = []
  filteredProducts: Iproduct[] = []
  categories: any[] = []
  cat: string = '';
  selectedCategory: string = '';
  searchTerm: string = '';  // New property to store the search term
  selectedOption: string = 'products';
  numOfProductsInCategory:number = -1;


  checkSelectedOption() {
    console.log(this.selectedOption);
  }


  showAlert(){
    Swal.fire({
      title: 'Thank You!',
      text: 'Your Order On Deliver',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#30d633',  // Custom button color
      cancelButtonColor: '#d33',
      showCancelButton: false,
      cancelButtonText: 'Cancel'
    });
  }



  deleteLogic(id:string){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#30d633",
      cancelButtonColor: "#818181",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._ApiService.delete_product(id).subscribe({
          next:()=>{
            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted.",
              confirmButtonColor: "#30d633",
              icon: "success"
            });
            this.filteredProducts = this.filteredProducts.filter(product => product.id!== id)
          }
        })
      }
    });

   
  }

  isCatGotProducts(c:string):number{
    let p = this.allProducts.filter(product => product.category.name == c)
    this.numOfProductsInCategory = p.length
    return p.length
  }

  deleteLogicCategory(id:string,categoryname:string){
    if(this.isCatGotProducts(categoryname)){
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Can't Delete this Product !",
        footer: 'Delete All product in this category first'
      });
      
    }
    else{
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#30d633",
        cancelButtonColor: "#818181",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this._ApiService.delete_Category(id).subscribe({
            next:()=>{
              Swal.fire({
                title: "Deleted!",
                text: "Category has been deleted.",
                confirmButtonColor: "#30d633",
                icon: "success"
              });
              this.categories= this.categories.filter(cat => cat.id!== id)
            }
          })
        }
      });
    }

   
  }

  ngOnInit(): void {
    this._ApiService.Get_All_Products().subscribe({
      next: (res) => {
        console.log(res);
        this.allProducts = res
        this.filteredProducts = this.allProducts
        this._ApiService.Get_Categories().subscribe({
          next: (res) => {
            console.log(res);
            this.categories = res
            this._ActivatedRoute.params.subscribe((params) => {
              params['cat'] ? this.cat = params['cat'] : this.cat = 'all'
              this.selectedCategory = this.cat
              this.filterByCategory();
              console.log(this.cat);
            })
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('products is destroyed');
  }

  // Filters products by category
  filterByCategory() {
    if (this.cat !== 'all') {
      this.filteredProducts = this.allProducts.filter(product => product.category.name === this.cat)
    } 
    else {
      this.filteredProducts = this.allProducts;
    }
    // Apply search filter after category filter
    this.filterByName();
  }

  // Filters products by name
  filterByName() {
    this.filteredProducts = this.filteredProducts.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  // Method to handle category change
  onCategoryChange(newCategory: string) {
    this.cat = newCategory;
    this.filterByCategory();
  }

  // Method to handle search input changes
  onSearchChange() {
    this.filterByCategory();  // Apply category filter first and then search by name
  }




}
