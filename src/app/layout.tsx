import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css';
import { Providers } from './providers';

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
 
  return (
    <html lang={locale}>
      <body>
        <Providers>
        <Header locale={locale} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}