import Footer from '@/components/footer';
import NavBar from '../components/navbar';
import { createPageMetadata } from '@/util/seo-metadata';
import "./globals.css";

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SD IoTecs LLP',
  url: 'https://www.sdiotecs.com',
  logo: 'https://www.sdiotecs.com/iotecs-logo.svg',
  email: 'darshan@sdiotecs.com',
  telephone: '+919324207852',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office no 203, Rajgruhi Business Hub, Nr Gokul Hotel, Kondhwa, Budruk',
    postalCode: '411048',
    addressLocality: 'Pune',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Bengaluru' },
  ],
  sameAs: ['https://www.linkedin.com/company/sd-iotecs/'],
};

export const metadata = {
  ...createPageMetadata({
    title: 'Innovating Building Management | SD IoTecs',
    description: 'SD IoTecs provides comprehensive Intelligent Building solutions including Semantic Ontology, Cloud Integration, and Advanced Analytics to make buildings smarter and more efficient.',
    path: '/',
  }),
  keywords: ["SD IoTecs", "SD IoTecs site", "SD IoTecs website", "Intelligent Building", "Cloud Integration", "Semantic Ontology", "Digital Twin", "UDMI", "Digital Buildings", "Advanced Analytics", "3D Graphics"],
  metadataBase: new URL('https://www.sdiotecs.com'),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <header className="fixed top-0 w-full z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/80 supports-backdrop-blur:bg-white/90">
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
