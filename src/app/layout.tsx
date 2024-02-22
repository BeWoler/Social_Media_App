import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';

import { Spinner } from '@/components/shared';
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
        <BasicProvider>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </BasicProvider>
      </body>
    </html>
  );
}
