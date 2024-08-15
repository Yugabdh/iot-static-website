import NavBar from '../components/navbar';
import "./globals.css";

export const metadata = {
  title: "Home | SD IOTecs - Expert Solutions for Your Needs",
  description: "Welcome to SD IOTecs. We offer expert solutions and resources on [Your Key Topics]. Explore our content and services designed to help you achieve your goals.",
  keywords: "SD IOTecs, [Key Topic 1], [Key Topic 2], [Relevant Keywords]",
  author: "SD IOTecs",
  robots: "index, follow",
  ogTitle: "Home | SD IOTecs - Expert Solutions for Your Needs",
  ogDescription: "Explore SD IOTecs for expert solutions and valuable resources on [Your Key Topics]. Find out how we can help you succeed.",
  ogImage: "/path-to-your-image.jpg",
  ogUrl: "https://yourwebsite.com",
  twitterCard: "summary_large_image",
  twitterSite: "@yourtwitterhandle",
  twitterTitle: "Home | SD IOTecs",
  twitterDescription: "Welcome to SD IOTecs. Discover expert solutions and valuable content on [Your Key Topics].",
  twitterImage: "/path-to-your-image.jpg",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className='font-sans'>
        <header className="fixed top-0 w-full z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/80 supports-backdrop-blur:bg-white/90 dark:bg-transparent">
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
