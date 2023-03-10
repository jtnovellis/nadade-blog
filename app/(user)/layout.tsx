import Header from '@/components/Header';
import '@/app/globals.css';
import Banner from '@/components/Banner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <head />
      <body className='max-w-7xl mx-auto'>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
