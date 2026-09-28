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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "SNS Construction",
        "url": "https://www.snsconstructioninc.com/",
        "logo": "https://www.snsconstructioninc.com/icon.png"
      },
      {
        "@type": "WebSite",
        "name": "SNS Construction",
        "url": "https://www.snsconstructioninc.com/"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
