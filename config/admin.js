module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cbca7e248122c37eb707177d9e6ff94b'),
  },
});
