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
  title: 'Seth / Natal Chart Atlas',
  description: 'A corrected, visual interpretation of Seth Halpern\'s natal chart.',
  openGraph: {
    title: 'Seth / Natal Chart Atlas',
    description: 'Relationship as catalyst.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seth / Natal Chart Atlas',
    description: 'Relationship as catalyst.',
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
