export default function sitemap() {
    const lastModified = new Date();

    return [
        {
            url: 'https://www.sdiotecs.com/',
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.sdiotecs.com/about-us',
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.sdiotecs.com/contact-us',
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.sdiotecs.com/technology-partners',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sdiotecs.com/services',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://www.sdiotecs.com/services/bms-supply-installation-testing-commissioning',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.sdiotecs.com/services/continuous-commissioning',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.sdiotecs.com/services/data-modelling-semantic-tagging',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.sdiotecs.com/services/cloud-iot-integration',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.sdiotecs.com/services/dashboards-and-reporting',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.sdiotecs.com/services/3d-graphics-visualisation',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
};