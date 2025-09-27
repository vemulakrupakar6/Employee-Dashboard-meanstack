import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.js";
import pool from "./db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:4200", credentials: true }));
app.use(bodyParser.json());

// ✅ Test DB connection on start
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ Connected to MySQL database");
    conn.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
