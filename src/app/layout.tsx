import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'ABC Health System',
  description: 'Your one-stop shop for fixing spelling',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg font-sans text-textPrimary flex-col">
        <Header />
        <main className="max-w-[480px] m-auto">{children}</main>
      </body>
    </html>
  );
}
