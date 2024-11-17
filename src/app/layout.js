import './globals.css';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import { MenuColorProvider } from '@/context/MenuContext'; // Import the provider


export const metadata = {
  title: 'Your Site Title',
  description: 'Description of your site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuColorProvider> {/* Wrap your app with the provider */}
          <Menu />
          <main>{children}</main>
          {/* <Footer /> */}
        </MenuColorProvider>
      </body>
    </html>
  );
}
