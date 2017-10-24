import React, { Component } from 'react'
import './Products.css'
import ProductsContainer from './components/ProductsContainer'

class Products extends Component {
  render() {
    return (
      <div className="Products">
          <h1 className="productTitle">Products List</h1>
        <ProductsContainer />
      </div>
    );
  }
}

export default Products