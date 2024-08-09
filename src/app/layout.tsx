import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import { Layout } from '@/components/Layout';
import { title } from '@/components/AboutMe.mdx';

export const metadata: Metadata = {
  title: 'Jeremy Jones - Software engineer',
  description: title,
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
