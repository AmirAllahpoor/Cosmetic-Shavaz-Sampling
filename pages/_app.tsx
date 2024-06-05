import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import {store} from "@/reduxjs/store"
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import MyNavbar from "@/components/Navbar/Navbar";
import FooterSite from "@/components/Footer/FooterSite";
import { EdgeStoreProvider } from '../lib/edgestore';

export default function App({ Component, pageProps } : AppProps) {

  const persistor = persistStore(store)

  return (
    <EdgeStoreProvider>
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MyNavbar />
          <Component {...pageProps} />;
          <FooterSite />
        </PersistGate>
      </Provider>
    </SessionProvider>
    </EdgeStoreProvider>
  )
}
