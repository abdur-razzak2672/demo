const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");

const prisma = new PrismaClient();

const register = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { name, email, password: hashedPassword } });
  return user;
};

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken, user };
};

module.exports = { register, login };
