import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { CookiesProvider } from "react-cookie";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CookiesProvider>
      <div className={`${GeistSans.className} min-h-screen h-screen flex flex-col`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CookiesProvider>
  );
};

export default api.withTRPC(MyApp);


