export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'", 'https:'],
          'script-src': ["'self'", 'https:'],
          'connect-src': ["'self'", 'https:', 'http:'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: '*', // Gerekirse sadece belirli domainleri buraya yaz
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
