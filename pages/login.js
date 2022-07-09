/* eslint-disable react-hooks/rules-of-hooks */

import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { getError } from "../utils/error";
import { useRouter } from "next/router";

const login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [session, router, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const submitHandle = async ({ email, password }) => {
    console.log(email, password);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <form
        className="max-w-screen-md m-auto"
        onSubmit={handleSubmit(submitHandle)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="w-full"
            autoFocus
            {...register("email", {
              required: "Please Enter Email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please Enter A Valid Email Address",
              },
            })}
          />
          {errors?.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="w-full"
            autoFocus
            {...register("password", {
              required: "Enter Your Password",
            })}
          />
          {errors?.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
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
