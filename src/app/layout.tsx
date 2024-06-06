import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css';
import { Providers } from './providers';
import { useEffect } from 'react';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

    if (typeof window !== "undefined") {
      document.documentElement.classList.add('dark');
    }


  return (
    <html lang={locale}>
      <body>
        <Providers>
          <Header locale={locale} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
