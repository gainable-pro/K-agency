import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-Agency | Cabinet de Recrutement Premium",
  description: "Connecter les talents et les entreprises entre le Maroc, l'Europe et l'Afrique.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <main className="flex-1 w-full">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
