import services from '@/util/services';

const siteUrl = 'https://www.sdiotecs.com';

export default function sitemap() {
    const staticRoutes = [
        {
            url: `${siteUrl}/`,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteUrl}/about-us`,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact-us`,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${siteUrl}/technology-partners`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteUrl}/services`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    const serviceRoutes = services.map(({ slug }) => ({
        url: `${siteUrl}/services/${slug}`,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticRoutes, ...serviceRoutes];
}