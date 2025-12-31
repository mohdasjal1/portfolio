import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"],
  variable: "--font-inter"
 });

export const metadata = {
  title: "Asjal Portfolio",
  description: "Created by Asjal",
  icons: {
    icon: [
      {
        url: "/favicon.ico.png",
        href: "/favicon.ico.png",
        sizes: '32x32'
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background relative -z-20 text-foreground font-inter')}>
        <Navigation  />
        {children}
      </body>
    </html>
  );
}
