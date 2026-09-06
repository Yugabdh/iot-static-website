import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { createPageMetadata } from '@/util/seo-metadata';

export const metadata = createPageMetadata({
  title: 'Contact SD IoTecs | BMS Integration & Commissioning',
  description: 'Speak with SD IoTecs about BMS installation, commissioning, data modelling, cloud integration and building automation support across India.',
  path: '/contact-us',
});

const Contact = () => {
  return (
    <section className="mt-22 mb-32">
      <div id="map" className="relative h-75 overflow-hidden bg-cover bg-position-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.510498728659!2d73.87491437527957!3d18.46052148262145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb5e6bca99ed%3A0xc279184a9c880112!2sRajgruhi%20Business%20Hub!5e0!3m2!1sen!2sin!4v1724596310562!5m2!1sen!2sin"
          width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="container px-6 md:px-12">
        <div
          className="block backdrop-blur bg-white/80 supports-backdrop-blur:bg-white/90 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] -mt-25">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                <p className="mt-4 text-sm leading-7 uppercase">
                  Contact
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight font-headline">
                  <span className="text-sky-700">Talk</span> to an Engineer
                </h3>
                <p className="mt-4 leading-7 text-gray-200">
                  Tell us about the building and what it needs to do. You will get a reply from someone who
                  works on these systems, not from a sales desk. We respond to all technical enquiries within
                  one working day.
                </p>

                <div className="flex items-center mt-5">
                  <FaLocationDot className='mr-2 text-sky-700 text-xl' />
                  <span className="text-sm">Office no 203, Rajgruhi Business Hub, Nr Gokul Hotel, Kondhwa, Budruk, 411048</span>
                </div>
                <div className="flex items-center mt-5">
                  <IoMail className='mr-2 text-sky-700 text-xl' />
                  <a className="text-sm"
                    href="mailto:info@sdiotecs.com">
                    info@sdiotecs.com
                  </a>
                </div>
                <div className="flex items-center mt-5">
                  <IoMail className='mr-2 text-sky-700 text-xl' />
                  <a className="text-sm"
                    href="mailto:sales@sdiotecs.com">
                    sales@sdiotecs.com
                  </a>
                </div>
                <div className="flex items-center mt-5">
                  <IoCallSharp className='mr-2 text-sky-700 text-xl' />
                  <span className="text-sm">+91 932 4207 852</span>
                </div>

              </div>
              <form className="md:col-span-8 p-10" target="_blank" action="https://formsubmit.co/darshan@sdiotecs.com" method="POST">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name">
                      First Name
                    </label>
                    <input name="first-name"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name" type="text" placeholder="Jane" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name">
                      Last Name
                    </label>
                    <input name="last-name"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-email">
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email" type="email" name="email" placeholder="********@*****.**" />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-message">
                      Your Message
                    </label>
                    <textarea name="message" id="grid-message" rows="10"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                  </div>
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <div className="flex justify-between w-full px-3">
                    <button
                      className="shadow bg-sky-700 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit">
                      Send Message
                    </button>
                  </div>

                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;