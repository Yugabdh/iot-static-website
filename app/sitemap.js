export default function sitemap() {
    return [
        {
            url: 'https://www.sdiotecs.com/',
            lastModified: new Date('2024-08-16'),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.sdiotecs.com/about-us',
            lastModified: new Date('2024-08-16'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.sdiotecs.com/contact-us',
            lastModified: new Date('2024-08-16'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.sdiotecs.com/our-partners',
            lastModified: new Date('2024-10-24'),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
};