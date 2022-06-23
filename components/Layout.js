import Head from "next/head";

import NavBar from "./NavBar";

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
          <NavBar />
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
