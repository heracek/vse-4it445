import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dummyAction } from '../../actions';

export class AddProductToCartButtonRaw extends Component {
  render() {
    const { product, dummyAction } = this.props;

    return (
      <button
        onClick={() => dummyAction(product)}
        type="button"
        className="btn btn-success"
      >
        <span
          className="glyphicon glyphicon-shopping-cart"
          aria-hidden="true"
        />{' '}
        Add to cart
      </button>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  dummyAction,
};

export const AddProductToCartButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductToCartButtonRaw);
