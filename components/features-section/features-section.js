import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const FeatureSection = () => {
    return (
        <div className="py-32">
            <div className="container mx-auto">
                <div className="lg:px-8 py-8">
                <div className="text-center mb-8">
                    <span className="block text-sm font-semibold text-gray-500">What We Offer</span>
                    <h2 className="text-3xl font-headline font-bold mt-2 mb-4">Our Featured Solutions</h2>
                    <div className="w-16 h-1 bg-sky-700 mx-auto mb-4"></div>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="mb-4">
                            <Image src="/images/png/icons/motion-sensor.png" alt="Sensor Automation" width={100} height={100} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900 hover:text-sky-700">
                            Sensor Automation
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. 
                        </p>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection