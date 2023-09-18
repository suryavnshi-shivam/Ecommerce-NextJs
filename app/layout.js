import Navbar from '@/components/navbar/Navbar';
import './globals.css'
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import React from "react";
import { Store, StoreProvider } from '@/redux/Store';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SHOES ADDA',
  description: 'Welcome to our SHOES ADD website, your ultimate destination for footwear enthusiasts and fashion connoisseurs! Immerse yourself in a world of style, comfort, and endless choices as you explore our meticulously curated collection of shoes for every occasion and every taste.Step into a realm where fashion meets functionality. Our Shoe Store offers an unparalleled assortment of footwear that seamlessly blends trendsetting designs with the finest craftsmanship. Whether you'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <StoreProvider store={Store}>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
