import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  Gruppo,
  Pacifico,
  Reenie_Beanie,
  Sacramento,
  Kaushan_Script,
  Eagle_Lake,
  Comfortaa,
  Sail,
  Jost,
} from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jostSemibold = Jost({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-jost-semibold",
});

const sail = Sail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sail",
});

const comfortaaLight = Comfortaa({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-comfortaa-light",
});
const comfortaaRegular = Comfortaa({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-comfortaa-regular",
});

const comfortaaMedium = Comfortaa({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-comfortaa-Medium",
});

const comfortaaSemiBold = Comfortaa({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-comfortaa-semibold",
});

const comfortaaBold = Comfortaa({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-comfortaa-bold",
});

const eagleLake = Eagle_Lake({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-eagle-lake",
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan-script",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
});

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-reenie-beanie",
});

const gruppo = Gruppo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gruppo",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

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
      <body
        className={`${geistSans.variable} ${sail.variable} ${jostSemibold.variable} ${comfortaaBold.variable} ${comfortaaLight.variable} ${comfortaaMedium.variable} ${comfortaaRegular.variable} ${comfortaaSemiBold.variable} ${comfortaaLight.variable} ${reenieBeanie.variable} ${geistMono.variable} ${eagleLake.variable} ${kaushanScript.variable} ${gruppo.variable} ${pacifico.variable} ${sacramento.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
