import React from 'react';
import { Link } from 'react-router-dom';
import './products_section.css';

// Categories array with placeholder images
const categories = [
  { name: 'Electronics', image: 'https://picsum.photos/seed/electronics/300/200' },
  { name: 'Clothing', image: 'https://picsum.photos/seed/clothing/300/200' },
  { name: 'Home Decor', image: 'https://picsum.photos/seed/home-decor/300/200' },
  { name: 'Books', image: 'https://picsum.photos/seed/books/300/200' },
  { name: 'Sports', image: 'https://picsum.photos/seed/sports/300/200' },
  { name: 'Toys', image: 'https://picsum.photos/seed/toys/300/200' },
  { name: 'Beauty', image: 'https://picsum.photos/seed/beauty/300/200' },
];

const ProductsSection = () => (
  <section id="products" className="section">
    <h1>Our Products</h1>
    <p>Explore our wide range of products.</p>
    <div className="categories-grid">
      {categories.map((category) => (
        <Link 
          to={`/products/${category.name}`} 
          className="category-card" 
          key={category.name}
        >
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
        </Link>
      ))}
    </div>
  </section>
);

export default ProductsSection;
