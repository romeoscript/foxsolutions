 "use client"
import { Inter } from "next/font/google";
import '../../globals.css'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { SessionProvider } from 'next-auth/react';

// const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Welcome admin",
  description: "Balaga Effect",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
<html lang="en">
<body className="bg-gray-100">
<Header/>
<Sidebar/>

 {children}

  </body>
</html>
</SessionProvider>
  );
}