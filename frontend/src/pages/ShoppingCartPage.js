import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ShoppingCartPageRaw extends Component {
  render() {
    const { shoppingCartItems } = this.props;

    return (
      <div>
        <div className="jumbotron">
          <h1>Shopping Cart</h1>
        </div>
        {shoppingCartItems.map(item => (
          <div key={item.product.id}>
            <h3>
              {item.count}&times; {item.product.title}
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCartItems: state.shoppingCart.items,
});

export const ShoppingCartPage = connect(mapStateToProps)(ShoppingCartPageRaw);
