import React from 'react';
import features from '@/util/features';
import FeaturesCard from './features-card';


const FeatureSection = () => {
    return (
        <div className="py-32">
            <div className="container mx-auto">
                <div className="lg:px-8 py-8">
                    <div className="text-center mb-8">
                        <span className="text-sm font-medium text-sky-600 bg-sky-700/30 py-1 px-4 rounded-full">What We Offer</span>
                        <h2 className="text-3xl font-headline font-bold mt-2 mb-4">Our Featured Solutions</h2>
                        <div className="w-16 h-1 bg-sky-700 mx-auto mb-4"></div>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {
                            features.map((feature, idx) => (<FeaturesCard key={idx} title={feature.title} img={feature.src} info={feature.info}/>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection