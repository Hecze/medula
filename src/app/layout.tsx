import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/Contact/WhatsAppButton";
import './globals.css';
import { Providers } from './providers';

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
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <Header locale={locale} />
          {children}
          <WhatsAppButton phoneNumber="921897249" message="Hola, me gustaría ponerme en contacto contigo." />
        </Providers>
      </body>
    </html>
  );
}
