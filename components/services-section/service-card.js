import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const ServiceCard = ({ title, img, info, href }) => {
    return (
        <Link href={href} className="sm:w-full lg:w-96">
          <div className="h-full rounded-lg border border-sky-100 bg-linear-to-t from-sky-100 to-white p-6 text-center shadow-lg transition-all delay-150 duration-300 ease-in hover:-translate-y-1">
            <div className="mb-4">
                <Image
                    src={img}
                    alt={`Image representing ${title}`}
                    width={100}
                    height={100}
                    className="mx-auto"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 hover:text-sky-700">
                {title}
            </h3>
            <p className="text-gray-600 mb-4">
                {info}
            </p>
          </div>
        </Link>
    );
}

export default ServiceCard;