import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";


const Contact = () => {
  return (
    <section className="mb-32">
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.047111461!2d73.78056575729849!3d18.524598599643525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723989707156!5m2!1sen!2sin"
          width="100%" height="480" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div className="container px-6 md:px-12">
        <div
          className="block backdrop-blur bg-white/80 supports-backdrop-blur:bg-white/90 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] -mt-[100px]">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                <p className="mt-4 text-sm leading-7 uppercase">
                  Contact
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight font-headline">
                  Get In <span className="text-sky-700">Touch</span>
                </h3>
                <p className="mt-4 leading-7 text-gray-200">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s.
                </p>

                <div className="flex items-center mt-5">
                  <FaLocationDot className='mr-2 text-sky-700 text-xl' />
                  <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                </div>
                <div className="flex items-center mt-5">
                  <IoCallSharp className='mr-2 text-sky-700 text-xl' />
                  <span className="text-sm">+93 749 99 65 50</span>
                </div>

              </div>
              <form className="md:col-span-8 p-10">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name">
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name" type="text" placeholder="Jane" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name">
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password">
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email" type="email" placeholder="********@*****.**" />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password">
                      Your Message
                    </label>
                    <textarea rows="10"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                  </div>
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