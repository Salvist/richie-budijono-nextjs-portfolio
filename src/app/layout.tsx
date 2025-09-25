import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Montserrat,
  Bitter,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const sourceSansPro = Source_Sans_3({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export { montserrat, sourceSansPro };

export const metadata: Metadata = {
  title: "Richie Budijono",
  description: "A portfolio and life journey of Richie Budijono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex min-h-screen flex-col antialiased ${poppins.className}`}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
