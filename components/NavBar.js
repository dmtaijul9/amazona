import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { Store } from "../utils/store";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";

const NavBar = () => {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cardItemsCount, setCardItemsCount] = useState(0);
  useEffect(() => {
    setCardItemsCount(cart?.cartItems.reduce((a, b) => a + b.quantity, 0));
  }, [cart?.cartItems]);

  const logoutHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <nav className="flex items-center justify-between h-12 px-4 shadow-md ">
      <Link href="/">
        <a className="text-lg font-bold">amazona</a>
      </Link>
      <div>
        <Link href="/cart">
          <a className="p-2">
            Cart
            {cardItemsCount > 0 && (
              <span className="px-2 py-1 ml-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {cardItemsCount}{" "}
              </span>
            )}
          </a>
        </Link>
        {status === "loading" ? (
          "Loading"
        ) : session?.user ? (
          <Menu as={"div"} className="relative inline-block">
            <Menu.Button className="text-blue-500">
              {" "}
              {session.user.name}{" "}
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/profile">
                  Profile
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/order-history">
                  Order History
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink
                  className="dropdown-link"
                  href="/logout"
                  onClick={logoutHandler}
                >
                  Logout
                </DropdownLink>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <Link href="/login">
            <a className="p-2">Login</a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
