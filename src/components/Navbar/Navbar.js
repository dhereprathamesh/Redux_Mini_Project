import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { add_to_cart_saga, remove_from_cart_saga } from "../../Store/Cart/cart.action";
import { bindActionCreators } from 'redux';
import "./Navbar.css";

function Navbar({count}) {
  console.log("counter test",count)
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/home" className="linkage-tag"> 
        <div className="logo">
          <a href="/">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Louis-Vuitton-Logo.jpg"
              alt="Amazon Logo"
              className="nav-logo"
            />
          </a>
          <span className="nav-title">V SHOPING</span>
        </div>
        </Link>
        <div className="search">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">{/* <FaSearch /> */}</button>
          </form>
        </div>
        <Link to="/mycart" className="my-cart">
        <div className="account">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span className="total-product">{count}</span>
          <a href="#" className="cart-div">Cart</a>
          <div className="dropdown">
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Wish List</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      </nav>
    </header>
  );
}
const mapStateToProps = (state) =>{
  return{
    count: state.CartReducer.total,
  };
};

const mapDispatchToProps = (dispatch)=> 
bindActionCreators(
  {
    add_to_cart: add_to_cart_saga,
    remove_from_cart: remove_from_cart_saga,
},dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
