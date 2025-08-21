require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoute");
const todoRoutes = require("./routes/todoRoute");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.get("/", (_req, res) => res.send("Prisma JWT Todo API Running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
