import Navbar from '@/src/components/Navbar/Navbar';
import Footer from '@/src/components/Footer/Footer';
import '../src/index.css'; // Global reset and CSS variables
import '../src/App.css'; // Global styles

export const metadata = {
  metadataBase: new URL('https://www.snsconstructioninc.com'),
  title: 'SNS Construction',
  description: 'SNS Construction Official Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
