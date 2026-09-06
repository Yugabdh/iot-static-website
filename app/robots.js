export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        host: 'https://www.sdiotecs.com',
        sitemap: 'https://www.sdiotecs.com/sitemap.xml',
    };
}