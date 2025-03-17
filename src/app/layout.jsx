import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import instagramLogo from '../lib/image/brand/instagram.svg';
import ReduxProvider from "@/redux/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "S2A2 Chocoland",
    template: "$s | S2A2 Chocoland"
  },
  description: "Best chocolates from the chocoland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-amber-300`}>
        <header>
          <nav className="flex flex-col justify-between sm:flex-row min-h-20">
            <div className=" flex m-auto sm:m-0 min-h-20 items-center">
              <h1 className="sm:ms-5 text-xl">S2A2 Chocoland</h1>
            </div>
            <div className="m-auto sm:m-0">
              <ul className="flex flex-row space-x-5 sm:me-5 min-h-20 items-center">
                <Link href='/'><span className="border-2 border-amber-300 p-2 rounded-xl">Home</span></Link>
                <Link href='/about'><span className="border-2 border-amber-300 p-2 rounded-xl">About</span></Link>
                <Link href='/contact'><span className="border-2 border-amber-300 p-2 rounded-xl">Contact Us</span></Link>
                <Link href='/registration'><span className="border-2 border-amber-300 p-2 rounded-xl">Login</span></Link>
                <Link href='/cart'><span className="border-2 border-amber-300 p-2 rounded-xl">Cart</span></Link>
              </ul>
            </div>
          </nav>
        </header>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <footer>
          <div className="p-3 flex flex-row justify-between">
            <div>
              <p>S2A2 Chocoland</p>
              <p>&#169; ALL RIGHTS RESERVED</p>
            </div>
            <div className="flex flex-row space-x-4">
                <Link href='/'><Image height={30} width={30} src={instagramLogo} alt="instagram logo" className="m-0"/></Link>
                <Link href='/'><Image height={30} width={30} src={instagramLogo} alt="instagram logo" className="m-0"/></Link>
                <Link href='/'><Image height={30} width={30} src={instagramLogo} alt="instagram logo" className="m-0"/></Link>
                <Link href='/'><Image height={30} width={30} src={instagramLogo} alt="instagram logo" className="m-0"/></Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
