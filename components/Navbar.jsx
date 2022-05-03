import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showcart, setShowcart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p>
        <Link href="/">Zoom mart</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowcart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showcart && <Cart />}
    </div>
  );
};

export default Navbar;
