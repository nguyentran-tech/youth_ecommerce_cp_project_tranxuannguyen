import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineAndroid, AiOutlineMessage } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">YOUTH STORE</Link>
      </p>
      <a href="/chatbot" className="chatbot-icon" target="_blank">
        <AiOutlineAndroid />
        <span className="chatbot-item"><AiOutlineMessage /></span>
      </a>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar