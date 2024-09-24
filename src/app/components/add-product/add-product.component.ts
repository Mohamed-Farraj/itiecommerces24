import { CategoryComponent } from './../category/category.component';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productId: any;
  myproduct: any;
  Categories: any[] = [];
  myForm = new FormGroup({
    imageCover: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
});
get getImage() {
  return this.myForm.controls['imageCover'];
}
get getName() {
  return this.myForm.controls['title'];
}
get getCategory() {
  return this.myForm.controls['category'];
}
get getPrice() {
  return this.myForm.controls['price'];
}
get getDescription() {
  return this.myForm.controls['description'];
}

constructor(
  public service:ApiService,
  public activatedroute: ActivatedRoute,
  public router: Router
) {
  this.productId = this.activatedroute.snapshot.params['id'];
}

ngOnInit(): void {
  if (this.productId != 0) {
    this.service.get_product(this.productId).subscribe({
      next: (data) => {
        this.myproduct = data;
        this.getImage.setValue(this.myproduct.imageCover);
        this.getName.setValue(this.myproduct.title);
        this.getCategory.setValue(this.myproduct.category);
        this.getPrice.setValue(this.myproduct.price);
        this.getDescription.setValue(this.myproduct.description);
      },
    });
  }
  this.service.Get_Categories().subscribe({
    next: (categories) => {
      this.Categories = categories;
    },
  });
}

onsubmit() {
  console.log(this.myForm);
  if (this.myForm.status == 'VALID') {
    if (this.productId == 0) {
      this.service.Add_Product(this.myForm.value).subscribe({
        next: () => {
          this.router.navigate(['/admin']);
        },
      });
    } else {
      this.service.edit_product(this.productId, this.myForm.value).subscribe({
        next: () => {
          this.router.navigate(['/admin']);
        },
      });
    }
  }
}
}


