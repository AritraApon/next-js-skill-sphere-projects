// import dns from 'node:dns'
// dns.setServers (["8.8.8.8" , "8.8.4.4" ])


import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";



const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],

});


export const metadata = {
  title: "Skill Sphere",
  description: "Master your future with Skill Sphere",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning={true}
      className={`${nunito.className} h-full antialiased`} data-theme='light'
    >
      <body className="min-h-full flex flex-col bg-[#fcf8ff]" suppressHydrationWarning={true}>
         <Navbar/>
         <main className="container mx-auto ">
             {children}
         </main>

        <Footer/>
         <ToastContainer />
        </body>
    </html>
  );
}
