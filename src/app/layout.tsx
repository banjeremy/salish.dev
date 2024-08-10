import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Jeremy Jones - Software engineer',
  description: 'I’m Jeremy Jones. I build fine apps for the web and iOS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
