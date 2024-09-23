import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories:any;

  constructor(public service:ApiService){
    
    this.service.Get_Categories().subscribe({
      next:(data)=>{
        this.categories = data;
      }
    })

  }

}
