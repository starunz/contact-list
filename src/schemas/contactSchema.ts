import Joi from 'joi';

const contactSchema = Joi.object({
	name: Joi.string().min(2).max(40).required(),
	email: Joi.string().max(40).email({ tlds: { allow: false } }),
	phone: Joi.string().min(10).max(11).required(),
	img: Joi.string().required()
}).length(4);

export {
	contactSchema,
};
