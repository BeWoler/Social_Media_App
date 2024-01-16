import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import './globals.css';
import { BasicProvider } from '@/components/features';

const inter = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social Media App',
  description: 'Social Media App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasicProvider>{children}</BasicProvider>
      </body>
    </html>
  );
}
