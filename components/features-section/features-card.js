import React from 'react';
import Image from 'next/image';

const FeaturesCard = ({title, img, info}) => {
    return (
        <div className="sm:w-full lg:w-64 bg-gradient-to-t from-sky-100 to-white shadow-lg border border-sky-100 rounded-lg p-6 text-center transition-all ease-in delay-150 duration-300 hover:-translate-y-1">
            <div className="mb-4">
                <Image src={img} alt={title} width={100} height={100} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 hover:text-sky-700">
                {title}
            </h3>
            <p className="text-gray-600 mb-4">
                {info}
            </p>
        </div>
    )
}

export default FeaturesCard;