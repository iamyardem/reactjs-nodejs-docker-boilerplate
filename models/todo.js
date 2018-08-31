const Joi = require('joi');

const todoSchema = Joi.object().keys({
  id: Joi.number(),
  title: Joi.string().min(3).max(100).required(),
  done: Joi.bool().default(false),
});

const todoFactory = async (payload) => {
  const result = await todoSchema.validate(payload);

  return result.error || result.value;
}

exports = todoFactory;