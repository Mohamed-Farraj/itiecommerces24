import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { CommonModule } from '@angular/common';

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
      this.service.edit_Category(this.categoryId, this.mycategory).subscribe({
        next: () => {
          this.router.navigate(['/admin']);
        },
      });
    }
  }
}
}
