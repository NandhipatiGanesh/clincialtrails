import type { Metadata } from "next";
import "./globals.css"; // Importing global styles
import Header from '../components/Header/header'; 
import Footer from '../components/footer/footer'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Header is inside the body */}
      <body className="your-custom-class">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
