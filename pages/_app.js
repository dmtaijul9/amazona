import "../styles/globals.css";
import { StoreProvider } from "../utils/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
