import { Poppins } from "next/font/google";
import "./globals.css";
import "@/app/styles/navigation/styles.css";
import "@/app/styles/styles.css";
import "@/app/styles/photo/styles.css"

import NavLinks from "@/app/ui/nav-links.js"
const inter = Poppins({ 
  subsets: ["latin"], 
  weight: '400'
});

export const metadata = {
  title: "Jojo Bragais",
  description: "Official Jojo Bragais Catalogue - Developer (Harold Del Rosario)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col min-w-full items-center justify-between">
          <NavLinks />
          {children}
        </main>
      </body>
    </html>
  );
}
