import Link from 'next/link';
import { FaLinkSlash } from 'react-icons/fa6';

export const metadata = {
  title: 'Page Not Found | SD IoTecs',
  description: 'The page you’re looking for doesn’t exist. Please return to the homepage or explore our technology partners.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6 pb-16 pt-32 text-center">
      <div className="w-full max-w-2xl">
        <FaLinkSlash className="mx-auto mb-8 text-7xl text-sky-700" aria-hidden="true" />
        <p className="mb-3 text-lg font-semibold text-sky-700">404</p>
        <h1 className="mb-6 text-3xl font-headline font-bold text-gray-900 md:text-5xl">
          404 — Page Not Found
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-gray-700">
          Sorry, the page you’re looking for doesn’t exist or may have been moved. Let’s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-gradient-to-br from-sky-700 to-slate-900 px-6 py-3 text-center text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-slate-300"
        >
          Go Back Home
        </Link>
        <div className="mt-5">
          <Link href="/about-us" className="font-semibold text-sky-700 hover:text-sky-900">
            Learn more about us
          </Link>
        </div>
      </div>
    </main>
  );
}
