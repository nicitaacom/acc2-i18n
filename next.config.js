/** @type {import('next').NextConfig} */


const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

const nextConfig = {
  i18n: {
    locales: ['ru', 'en', 'zh'],
    defaultLocale: 'en',
    localeDetection: true,
    domains: [
      {
        domain: 'example.ru',
        defaultLocale: 'ru',
      },
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
      {
        domain: 'example.cn',
        defaultLocale: 'zh', //Chinese
      },
    ],
  },
  // Use this if you want to set the defaultLocale based on the browser language
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/en/:path*', // Set your default locale accordingly
        has: [
          {
            type: 'cookie',
            key: 'NEXT_LOCALE_REDIRECTED',
            value: 'true',
          },
        ],
        locale: false,
      },
      {
        source: '/:path*',
        destination: '/[defaultLocale]/:path*',
        locale: false,
      },
    ];
  },
}

module.exports = withNextIntl(nextConfig);
