import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryId: any;
  mycategory: any;
  oldName:string = "";
  newName:string = "";
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required])
  });
  get getImage() {
    return this.myForm.controls['image'];
  }
  get getName() {
    return this.myForm.controls['name'];
  }
  constructor(
    public service:ApiService,
    public activatedroute: ActivatedRoute,
    public router: Router
  ) {
    this.categoryId = this.activatedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.categoryId != 0) {
      this.service.get_Category(this.categoryId).subscribe({
        next: (data) => {
          this.mycategory = data;
          this.oldName = this.mycategory.name
          this.getImage.setValue(this.mycategory.image);
          this.getName.setValue(this.mycategory.name);
        },
      });
    }
  }

onsubmit() {
  if (this.myForm.status == 'VALID') {
    if (this.categoryId == 0) {
      this.mycategory = {
        image: this.myForm.value.image,
        name: this.myForm.value.name,
       };
      this.service.Add_Category(this.mycategory).subscribe({
        next: () => {
          this.router.navigate(['/admin']);
        },
      });
    } else {
      this.mycategory = {
        image: this.myForm.value.image,
        name: this.myForm.value.name,
       };
       this.newName = this.mycategory.name
      this.service.edit_Category(this.categoryId, this.mycategory).subscribe({
        next: () => {
          console.log(this.oldName,this.newName);
          if(this.oldName!=this.newName)
          {
            let allproducts;
            this.service.Get_All_Products().subscribe({
              next: (data) => {
                allproducts = data;
                allproducts.forEach((product:any) => {
                  if(product.category.name==this.oldName)
                  {
                    console.log('here is assign log');
                    product.category.name = this.newName;
                  }
                });
                for(let i = 0; i< allproducts.length;i++){
                  this.service.edit_product(allproducts[i].id,allproducts[i]).subscribe({
                    next: () => {
                      console.log('updated');
                    }
                  });
                }
              }
            })
          }
          Swal.fire({
            title: "Successful!",
            text: "Category has been Edited.",
            confirmButtonColor: "#30d633",
            icon: "success"
          });
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 5000);
        },
      });
    }
  }
}
}
