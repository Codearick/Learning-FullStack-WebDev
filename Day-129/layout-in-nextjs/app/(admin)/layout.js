import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin: Facebook - Connect with people around the world",
  description: "Admin: Facebook is a social utility that connects people with friends and other who work, study and around them",
};

export default function AdminLayout({ children }) {
  return (
    <>
        <span>Admin Navbar</span>
        {children}
    </>
  );
}
