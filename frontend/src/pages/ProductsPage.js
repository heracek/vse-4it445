import React, { Component } from 'react';

import api from '../api.js';
import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    api('products/').then(res => {
      const { products } = res.data;
      this.setState({ products });
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={products} />
      </div>
    );
  }
}
