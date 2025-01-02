import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Loader from "@/components/loader";
import { Footer } from "@/components/footer";
import RenderHandler from "@/components/render-handler";

const gothamLight = localFont({
  src: "./fonts/gothamtest.woff2",
  variable: "--font-gotham-light",
});

const gothamBold = localFont({
  src: "./fonts/Gotham-Bold.otf",
  variable: "--font-gotham-bold",
});

export const metadata = {
  title: "Manjar2Go - Delivery y Pickup de Comida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gothamLight.className} antialiased tracking-tight`}>
        <RenderHandler/>
        <div>
          <Loader />
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}