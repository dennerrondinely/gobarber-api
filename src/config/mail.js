export default {
  host: process.env.MAILL_HOST,
  port: process.env.MAILL_PORT,
  secure: false,
  auth: {
    user: process.env.MAILL_USER,
    pass: process.env.MAILL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
