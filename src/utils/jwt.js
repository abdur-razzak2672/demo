const jwt = require("jsonwebtoken");
const { JWT_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

const verifyAccessToken = (token) => jwt.verify(token, JWT_SECRET);
const verifyRefreshToken = (token) => jwt.verify(token, REFRESH_TOKEN_SECRET);

module.exports = { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken };
