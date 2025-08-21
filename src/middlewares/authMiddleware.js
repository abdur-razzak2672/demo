const { verifyAccessToken } = require("../utils/jwt");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Authentication credential were not provide" });

  const token = authHeader.split(" ")[1];
  try {
    const user = verifyAccessToken(token);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { authenticate };
