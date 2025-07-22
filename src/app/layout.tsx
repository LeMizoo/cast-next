import "@/styles/globals.css";
import { EB_Garamond, Montserrat } from "next/font/google";
import type { Metadata } from "next";

const garamond = EB_Garamond({ subsets: ["latin"], weight: "400", variable: "--font-body" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "600", variable: "--font-title" });

export const metadata: Metadata = {
  title: "C.A.S.T. - Chorale Œcuménique",
  description: "Une voix pour l’unité, une musique pour la foi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${garamond.variable} ${montserrat.variable}`}>
      <body className="bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}