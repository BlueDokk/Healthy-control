import Joi from 'joi-browser';

// Scheme for field validation.
const schema = {
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lastname: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .alphanum()
        .min(6)
        .max(16)
        .required()
}

// Validation function for each independent field
const validate = (target) => {

    const schemaProperty = { [target.name]: schema[target.name] };
    const { error } = Joi.validate({ [target.name]: target.value }, schemaProperty);
    return error ? error.details[0].message : null;

}



export default validate;