import Joi from 'joi';

export const RegisterSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': "Please enter an email",
        'string.email': "Please enter a valid email"
    }),
    password: Joi.string().required().pattern(
        new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ).messages({
        'string.empty': "Password is required",
        'string.pattern.base': "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character"
    }),
    role: Joi.string().valid('citizen', 'admin').required().messages({
        'string.empty': "Role is required",
        'any.only': "Role must be either 'citizen' or 'admin'"
    })
});
