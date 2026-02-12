import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-Manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Saphire Furnitures - Modular Custom Furniture",
  description: "Design. Build. Love. Premium DIY modular furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Round|Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.className} antialiased flex flex-col min-h-screen`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
