import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/store";

const NavBar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  console.log(cart?.cartItems.reduce((a, b) => a + b.quantity, 0));
  return (
    <nav className="flex items-center justify-between h-12 px-4 shadow-md ">
      <Link href="/">
        <a className="text-lg font-bold">amazona</a>
      </Link>
      <div>
        <Link href="/cart">
          <a className="p-2">
            Cart
            {cart?.cartItems.length > 0 && (
              <span className="px-2 py-1 ml-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {cart?.cartItems.reduce((a, b) => a + b.quantity, 0)}{" "}
              </span>
            )}
          </a>
        </Link>
        <Link href="/loging">
          <a className="p-2">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
