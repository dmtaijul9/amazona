import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const login = () => {
  return (
    <Layout title="Login">
      <form className="max-w-screen-md m-auto">
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="w-full" autoFocus />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="w-full" autoFocus />
        </div>
        <div className="mb-4">
          <button type="submit" className="primary-button">
            Login
          </button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account &nbsp;
          <Link href="/register">Register</Link>
        </div>
      </form>
    </Layout>
  );
};

export default login;
