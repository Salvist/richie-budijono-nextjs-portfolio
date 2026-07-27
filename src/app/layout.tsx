import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const metadataBase = host
    ? new URL(`${protocol}://${host}`)
    : new URL(configuredUrl);

  return {
    metadataBase,
    title: {
      default: "Richie Budijono — Independent Product Consultant",
      template: "%s — Richie Budijono",
    },
    description:
      "I help founders shape and build web and mobile products—from early scope to production.",
    applicationName: "Richie Budijono",
    authors: [{ name: "Richie Budijono" }],
    creator: "Richie Budijono",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      title: "Richie Budijono — Independent Product Consultant",
      description:
        "I help founders shape and build web and mobile products—from early scope to production.",
      siteName: "Richie Budijono",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Richie Budijono — Independent Product Consultant",
      description:
        "I help founders shape and build web and mobile products—from early scope to production.",
      images: ["/og.png"],
    },
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "#richie",
      name: "Richie Budijono",
      jobTitle: "Independent Product Consultant",
      url: "/",
      sameAs: ["https://github.com/Salvist"],
    },
    {
      "@type": "Service",
      name: "Product consulting and engineering",
      description:
        "Product discovery, web and mobile engineering, integrations, and launch support for founders and small teams.",
      provider: { "@id": "#richie" },
      areaServed: "Worldwide",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <Providers>
          <Header />
          <main className="grow pt-20">{children}</main>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
