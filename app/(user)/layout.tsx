import Header from '@/components/Header';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
