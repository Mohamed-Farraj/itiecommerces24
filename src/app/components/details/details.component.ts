import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  productId: any;
  myproduct: any;
  constructor(
    public service:ApiService,
    public activatedroute: ActivatedRoute,
    public router: Router
  ) {
    this.productId = this.activatedroute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.service.get_product(this.productId).subscribe({
      next: (res) => {
        this.myproduct = res
      }
    })
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
 }
