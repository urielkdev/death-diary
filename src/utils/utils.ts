// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');

const saltRounds = +process.env.BCRYPT_SALT_ROUNDS || 10;

export const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, saltRounds);
};

export const validatePassword = async (
  password: string,
  dbPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, dbPassword);
};
