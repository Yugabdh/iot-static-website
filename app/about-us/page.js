import Link from 'next/link';
import React from 'react';
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 mt-16 bg-gray-100" style={{ backgroundImage: 'url(/images/dots.png)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold mb-4">Who We Are And What We Do</h2>
          <div className="w-16 h-1 bg-sky-700 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 items-stretch">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h4 className="text-xl font-semibold mb-4 text-sky-700">ABOUT US</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mb-4">
                Want to know more?
              </p>
              <Link
                href="/contact-us"
                className="text-white bg-gradient-to-br from-sky-700 to-slate-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 rounded-lg px-6 py-3 text-center me-2 mb-2"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h4 className="text-xl font-semibold mb-4 text-sky-700">FOR YOU</h4>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                  <span className="text-gray-700">
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                  <span className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                  <span className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
