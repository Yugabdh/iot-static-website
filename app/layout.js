import Footer from '@/components/footer';
import NavBar from '../components/navbar';
import "./globals.css";

export const metadata = {
  title: 'Innovating Building Management | SD IoTecs',
  description: 'SD IoTecs provides comprehensive Intelligent Building solutions including Semantic Ontology, Cloud Integration, and Advanced Analytics to make buildings smarter and more efficient.',
  keywords: 'Intelligent Building, Cloud Integration, Semantic Ontology, Digital Twin, UDMI, Digital Buildings, Advanced Analytics, 3D Graphics',
  openGraph: {
    title: 'Innovating Building Management Through Seamless Cloud Integration Solutions',
    description: 'From Semantic Ontology to Advanced Analytics, SD IoTecs makes your buildings smarter with comprehensive solutions tailored to meet your needs.',
    url: 'https://sdiotecs.com',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'SD IoTecs Logo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Innovating Building Management | SD IoTecs',
    description: 'From Semantic Ontology to Advanced Analytics, SD IoTecs makes your buildings smarter with comprehensive solutions tailored to meet your needs.',
    siteId: '1467726470533754880',
    creator: '@sdiotecs',
    creatorId: '1467726470533754880',
    images: ['https://sdiotecs.com/og.png'],
  },

  metadataBase: new URL('https://sdiotecs.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className='font-accent'>
        <header className="fixed top-0 w-full z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/80 supports-backdrop-blur:bg-white/90">
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
