import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Amazona` : "Amazona"}</title>
        <meta name="description " content="Ecommerce website" />
        <link rel="icon" href="/fabicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="flex items-center justify-between h-12 p-4 shadow-md ">
            <Link href="/">
              <a className="text-lg font-bold">amazona</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/loging">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>{" "}
        </header>
        <main className="container px-4 m-auto mt-4"> {children} </main>
        <footer className="flex items-center justify-center h-10 shadow-inner">
          <p>Copyright &copy; 2022 Amazona</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
