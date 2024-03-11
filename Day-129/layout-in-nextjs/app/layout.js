import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Connect with people around the world",
  description: "Facebook is a social utility that connects people with friends and other who work, study and around them",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <div className="min-h-[65vh]">
      <div className="mx-16 p-2">
      {children}
      </div>
      </div>
      <Footer/>
      </body>
    </html>
  );
}
