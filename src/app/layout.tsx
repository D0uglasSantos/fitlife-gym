import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import IconChat from "../components/IconChat";
import FixedFooter from "../components/FixedFooter";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fit Life",
  description: "Sua melhor versão começa aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Theme>
          {children}
          <FixedFooter />
          <IconChat />
        </Theme>
      </body>
    </html>
  );
}
