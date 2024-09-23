import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  filteredArray:Iproduct[] =     [
    {
    "sold": 1396,
    "images": [
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324664-2.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324665-3.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324664-1.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324665-4.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324665-5.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324666-7.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324666-6.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678303324667-8.jpeg"
    ],
    "subcategory": [
        {
            "_id": "6407f3a8b575d3b90bf957e2",
            "name": "Laptops & Accessories",
            "slug": "laptops-and-accessories",
            "category": "6439d2d167d9aa4ca970649f"
        }
    ],
    "ratingsQuantity": 497,
    "_id": "6408e05d6406cd15828e8f16",
    "title": "Galaxy Buds 2 Graphite",
    "slug": "galaxy-buds-2-graphite",
    "description": "Galaxy Buds 2 come up to 20 hours of playback time with active noise cancellation (ANC) turned on\nThe TWS earphones appear to have a total of three microphones and an integrated voice recording unit for high quality calls\nThe charging case offers an additional 15 hours worth of battery life\nGalaxy Buds2 ear buds take your passion for music to new heights with booming sound that makes you feel like you're on stage with your favorite band\nGalaxy Buds2 have a comfortable, low profile design that's 10% smaller and lighter than Galaxy Buds+; You may get to the end of your playlist before you remember you're wearing them at all\nThe earbuds’ 3 microphones and noise reduction technology ensures voices are transmitted crisply and clearly, whether you're chatting with a friend or leading a high stakes conference call",
    "quantity": 600,
    "price": 3999,
    "availableColors": [],
    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678303324588-cover.jpeg",
    "category": {
        "_id": "6439d2d167d9aa4ca970649f",
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
    },
    "brand": {
        "_id": "64089f5824b25627a25315c7",
        "name": "SONY",
        "slug": "sony",
        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
    },
    "ratingsAverage": 4.3,
    "createdAt": "2023-03-08T19:22:05.355Z",
    "updatedAt": "2024-09-21T22:40:25.721Z",
    "id": "6408e05d6406cd15828e8f16"
},
{
    "sold": 1438,
    "images": [
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803182-2.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803182-3.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803181-1.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803183-4.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803183-5.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803183-6.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803184-7.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803184-8.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803185-10.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678302803184-9.jpeg"
    ],
    "subcategory": [
        {
            "_id": "6407f3a8b575d3b90bf957e2",
            "name": "Laptops & Accessories",
            "slug": "laptops-and-accessories",
            "category": "6439d2d167d9aa4ca970649f"
        }
    ],
    "ratingsQuantity": 397,
    "_id": "6408de536406cd15828e8f10",
    "title": "WH-CH510 Wireless On-Ear Bluetooth Headphones Black",
    "slug": "wh-ch510-wireless-on-ear-bluetooth-headphones-black",
    "description": "Bluetooth wireless technology for unrestricted movement\nUp to 35 hours of battery life for all-day power and quick charging\nEasy hands-free calling and voice assistant commands with microphone\nCompact and lightweight, swivel ear cups allow easy portability\nSimple button press connects you to your smartphone's voice assistant to get directions, play music\nHear more detail with 30mm Driver Unit",
    "quantity": 600,
    "price": 1949,
    "availableColors": [],
    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678302803089-cover.jpeg",
    "category": {
        "_id": "6439d2d167d9aa4ca970649f",
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
    },
    "brand": {
        "_id": "64089f5824b25627a25315c7",
        "name": "SONY",
        "slug": "sony",
        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
    },
    "ratingsAverage": 4.3,
    "createdAt": "2023-03-08T19:13:23.984Z",
    "updatedAt": "2024-09-21T22:40:25.721Z",
    "id": "6408de536406cd15828e8f10"
},
{
    "sold": 2001,
    "images": [
        "https://ecommerce.routemisr.com/Route-Academy-products/1678301723376-3.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678301723375-2.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678301723376-4.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678301723375-1.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678301723377-5.jpeg",
        "https://ecommerce.routemisr.com/Route-Academy-products/1678301723377-6.jpeg"
    ],
    "subcategory": [
        {
            "_id": "6407f3a8b575d3b90bf957e2",
            "name": "Laptops & Accessories",
            "slug": "laptops-and-accessories",
            "category": "6439d2d167d9aa4ca970649f"
        }
    ],
    "ratingsQuantity": 6,
    "_id": "6408da1c6406cd15828e8f0a",
    "title": "Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White",
    "slug": "victus-16-d1016ne-laptop-with-16-inch-display-core-i7-12700h-processor-16gb-ram-1tb-nvidia-geforce-rtx3050-ti-graphics-englisharabic-ceramic-white",
    "description": "NVIDIA GeForce RTX 3060, 6 GB GDDR6\n15.6\", FHD 1920x1080, 120Hz, Non-Touch, AG, WVA, LED-Backlit, 300 nit, Narrow Border\n16 GB, 2 x 8 GB, DDR5, 4800 MHz, dual-channel\n512GB M.2 PCIe NVMe Solid State Drive, Nahimic 3D Audio\nOffice Home & Student 2021, US English orange qwerty backlit keyboard with numeric keypad and G-key",
    "quantity": 253,
    "price": 42960,
    "availableColors": [],
    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678301723274-cover.jpeg",
    "category": {
        "_id": "6439d2d167d9aa4ca970649f",
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
    },
    "brand": {
        "_id": "64089faf24b25627a25315cd",
        "name": "Dell",
        "slug": "dell",
        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286767914.png"
    },
    "ratingsAverage": 4.3,
    "createdAt": "2023-03-08T18:55:24.096Z",
    "updatedAt": "2024-09-21T17:52:49.295Z",
    "id": "6408da1c6406cd15828e8f0a"
}
]


}
