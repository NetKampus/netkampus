import { Lato, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

const fontSans = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "BeKampus",
  description: "Events and activities management platform for universities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
