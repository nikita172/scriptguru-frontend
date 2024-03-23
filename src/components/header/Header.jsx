import React, { useState } from 'react';
import "./header.css";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import cart from "../../assets/icons/cart.svg";
import bag from "../../assets/icons/bag.svg";
import bell from "../../assets/icons/bell.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";




const Header = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  return (
    <div className='header'>
      <div className="headerleft">
        <img className='logoImg' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />



        <div className="headerInput">
          <img src={search} />
          <input className='input' placeholder='Search for products, Brands and More' />
        </div>
      </div>

      <div className="headerRight">
        <div className='menu'>
          <img src={user} />
          <span>Login</span>
        </div>
        <div className='menu'>
          <img src={cart} />
          <span>Cart</span>
        </div>
        <div className='menu'>
          <img src={bag} />
          <span>Seller</span>
        </div>
        <div className='menu' >
          <img src={bell} />
          <span>Notification</span>
        </div>
        <div className='menuBtn' onClick={() => setIsModelOpen(true)}>
          <span>Menu</span>
          <img src={menu} />
        </div>
      </div>

      {isModalOpen &&
        <div className='profileModal' >
          <button className='closeImg'>
            <img src={close} className='closeIcon' alt='close' onClick={() => setIsModelOpen(false)} />
          </button>
          <div className='profileModalWrapper'>
            <span className='profileWrapperSpan'>Login</span>
            <span className='profileWrapperSpan'>Order</span>
            <span className='profileWrapperSpan'>Cart</span>
            <span className='profileWrapperSpan' style={{ backgroundColor: "red", color: "white", fontWeight: "500" }}>Logout</span>
          </div>
        </div>}
    </div>
  )
}

export default Header