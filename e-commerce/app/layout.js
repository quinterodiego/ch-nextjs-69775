import { Footer } from './components/ui/Footer';
import { Navbar } from './components/ui/Navbar';
import './globals.css'

export const metadata = {
  title: "DALMI Keyboards",
  description: "Teclados mecánicos de primera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
