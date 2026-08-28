import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seth-natal-chart-atlas.seth86.chatgpt.site'),
  title: 'Seth / Natal Chart Atlas',
  description: 'An interactive portrait of Seth Halpern through his natal chart.',
  openGraph: {
    title: 'Seth / Natal Chart Atlas',
    description: 'Precision on the surface. Movement underneath.',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seth / Natal Chart Atlas',
    description: 'Precision on the surface. Movement underneath.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
