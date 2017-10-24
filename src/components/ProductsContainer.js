import React, { Component } from 'react'
import axios from 'axios'

class ProductsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products')
    .then(response => {
      console.log(response)
      this.setState({products: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <div className="productContainer" key={product.id}>
              <h2>{product.name}</h2>
              <h3>Brand: {product.brand}</h3>
              <h3>Model: {product.model}</h3>
              <h3>Price: {product.price}</h3>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ProductsContainer