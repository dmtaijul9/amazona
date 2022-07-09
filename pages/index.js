import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Products";
import data from "../utils/data";
import db from "../utils/db";

export default function Home({ products }) {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => {
          return <ProductItem product={product} key={index} />;
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
