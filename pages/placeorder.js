import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

const placeorder = () => {
  return (
    <Layout title="Place Order page">
      <CheckoutWizard activeStep={3} />
      <div>Place Order</div>
    </Layout>
  );
};

export default placeorder;
