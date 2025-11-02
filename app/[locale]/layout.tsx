import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingContact from '@/components/floating-contact';
import PageTransition from '@/components/page-transition';
import GlobalClickSpark from '@/components/GlobalClickSpark';
import LanguageProvider from '@/components/language-provider';

import { IBM_Plex_Sans_Arabic } from 'next/font/google';

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: {
      default: 'Weber - Premium Web & Software Development Solutions',
      template: '%s | Weber',
    },
    description: t('subtitle'),
    keywords: [
      'web development',
      'software development',
      'UI/UX design',
      'custom systems',
      'web maintenance',
      'hosting solutions',
      'Next.js',
      'React',
      locale === 'ar' ? 'تطوير المواقع' : 'web development agency',
    ],
    authors: [{ name: 'Weber Agency' }],
    creator: 'Weber',
    publisher: 'Weber',
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AR' : 'en_US',
      url: 'https://weber.com',
      title: 'Weber - Premium Web & Software Development Solutions',
      description: t('subtitle'),
      siteName: 'Weber',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Weber - Premium Web & Software Development Solutions',
      description: t('subtitle'),
      creator: '@weber',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`antialiased ${locale === 'ar' ? ibmPlexArabic.variable : ''}`} style={locale === 'ar' ? { fontFamily: 'var(--font-ibm-plex-arabic)' } : {}}>
        <GlobalClickSpark
          sparkColor="#fff"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={500}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            forcedTheme="dark"
            disableTransitionOnChange
          >

            <NextIntlClientProvider messages={messages}>
              <LanguageProvider>
                <div className="relative z-10">
                  <Navbar locale={locale} />
                  <PageTransition>
                    <main className="min-h-screen">{children}</main>
                  </PageTransition>
                  <Footer locale={locale} />
                  <FloatingContact locale={locale} />
                </div>
              </LanguageProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </GlobalClickSpark>
      </body>
    </html>
  );
}
