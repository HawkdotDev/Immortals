export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Leather Jacket',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80',
    description: 'Classic leather jacket with distressed finish and metal hardware.',
    category: 'vintage-punk'
  },
  {
    id: '2',
    name: 'Studded Combat Boots',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80',
    description: 'Heavy-duty combat boots with silver studs and reinforced sole.',
    category: 'vintage-punk'
  },
  {
    id: '3',
    name: 'Modern Cargo Pants',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80',
    description: 'Technical cargo pants with multiple pockets and tapered fit.',
    category: 'modern-rebel'
  },
  {
    id: '4',
    name: 'Graphic Print Tee',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80',
    description: 'Limited edition graphic t-shirt with avant-garde design.',
    category: 'street-luxe'
  },
  {
    id: '5',
    name: 'Chain Detail Bag',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    description: 'Sleek crossbody bag with chunky chain detail.',
    category: 'modern-rebel'
  },
  {
    id: '6',
    name: 'Distressed Denim Jacket',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80',
    description: 'Hand-distressed denim jacket with custom patches.',
    category: 'street-luxe'
  }
];