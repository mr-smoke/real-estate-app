export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://real-estate-app-us29.onrender.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
