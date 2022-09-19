const Joi = require('joi');

module.exports = {
  // POST /v1/auth/register
  register: {
    body: {
      fullName: Joi.string()
        .required()
        .max(60),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required()
        .min(8)
        .max(128),
    },
  },

  // POST /v1/auth/login
  login: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required()
        .max(128),
    },
  },

  // POST /v1/auth/refresh
  refresh: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      refreshToken: Joi.string().required(),
    },
  },
};
