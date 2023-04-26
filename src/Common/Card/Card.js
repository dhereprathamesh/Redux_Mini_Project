import React, { Component } from "react";
import { connect } from "react-redux";
import "./Card.css";
import {
  add_to_cart_saga,
  remove_from_cart_saga,
} from "../../Store/Cart/cart.action";
import { bindActionCreators } from "redux";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  renderCartBtn = (product) => {
    const { add_to_cart, cart } = this.props;
    const { id } = product;

    if (true) {
      return (
        <div> Already added in cart</div>
      )
    }

    return (
      <button
        onClick={
          () => {
            add_to_cart(product)
          }
        }
      >
        Add to Cart
      </button>
    );
  };

  render() {
    const Products = [
      {
        id: 1,
        title: "Product 1",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsU6C_Xhc8Ro9TP98iUl0bpzn626KfFQaaA&usqp=CAU",
        price: 10,
      },
      {
        id: 2,
        title: "Product 2",
        image:
          "data:image/jpeg;base64,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",
        price: 20,
      },
      {
        id: 3,
        title: "Product 3",
        image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SY450_.jpg",
        price: 30,
      },
      {
        id: 4,
        title: "Product 4",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjubRhxldOr2IZ8EVUjYE_SdvXBJRTCYSjxw&usqp=CAU",
        price: 40,
      },
    ];

    const { add_to_cart, remove_from_cart, cart } = this.props;
    return (
      <div className="product-row">
        {Products.map((product) => {
          return (
            <div className="card">
              <img src={product.image} alt="Denim Jeans" />
              <h1>{product.title}</h1>
              <p className="price">${product.price}</p>
              <p>{this.renderCartBtn(product)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// const add_items = (product) =>{
//   add_to_cart(product)
// };

const mapStateToProps = (state) => {
  return {
    cart: state.CartReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      add_to_cart: add_to_cart_saga,
      remove_from_cart: remove_from_cart_saga,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Card);
