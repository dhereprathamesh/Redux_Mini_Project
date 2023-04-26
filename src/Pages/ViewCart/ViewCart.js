import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux' 

import './viewCart.css'
import { add_to_cart_saga, remove_from_cart_saga } from "../../Store/Cart/cart.action";

function ViewCart({cart, remove_from_cart}) {
  console.log({cart})
  return (
    <div>
        {cart.map((product)=>{
            return (
                <div className="spacing-div">
                <div className="viewcard">
                      <img src={product.image} alt="Denim Jeans" className="view-cart-img" />
                      <h1 className="view-cart-title">{product.title}</h1>
                      <p className="fees">{product.price}</p>
                      <p>
                        <button className="remove-items-btn"
                          onClick= { ()=> remove_from_cart(product)}>
                          Remove</button>
                      </p>
                </div>
            
                  
                </div>
            );
        })}


    </div>

  )
}

const mapStateToProps = (state) =>{
  return{
    cart: state.CartReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch)=> 
bindActionCreators(
  {
    add_to_cart: add_to_cart_saga,
    remove_from_cart: remove_from_cart_saga,
},dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart)