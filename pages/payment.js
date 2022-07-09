import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { Store } from "../utils/store";

const payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!selectedPaymentMethod) {
      toast.error("Please Select a Payment Method");
      return;
    }
    dispatch({
      type: "SAVE_PAYMENT_METHOD",
      payload: selectedPaymentMethod,
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );

    router.push("/placeorder");
  };

  useEffect(() => {
    if (!shippingAddress?.address) {
      router.push("/shipping");
    }
    setSelectedPaymentMethod(paymentMethod || "");
  }, [shippingAddress, paymentMethod]);

  const paymentType = ["Paypal", "Stripe", "CashOnDelivery"];

  return (
    <Layout title="Payment method ">
      <CheckoutWizard activeStep={2} />
      <form className="max-w-screen-md mx-auto" onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        {paymentType.map((payment) => {
          return (
            <div className="mb-4" key={payment}>
              <input
                name="paymentMethod"
                className="p-2 outline-none focus:ring-0"
                id={payment}
                type="radio"
                checked={selectedPaymentMethod === payment}
                onChange={() => setSelectedPaymentMethod(payment)}
              />
              <label htmlFor={payment} className="pl-2">
                {" "}
                {payment}{" "}
              </label>
            </div>
          );
        })}
        <div className="flex justify-between mb-4">
          <Link href="/shipping">
            <a className="default-button">Back</a>
          </Link>
          <button type="submit" className="primary-button">
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default payment;
