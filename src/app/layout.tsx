import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'DriveIstan | Premium Car Rentals Across Pakistan',
  description: 'Self-drive and chauffeur car rentals across Pakistan.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
