import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import GlobalProvider from "@/components/steploader/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kythi",
  description: "Kythi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <GlobalProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
