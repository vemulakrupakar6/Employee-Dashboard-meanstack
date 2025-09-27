import express from "express";
import pool from "../db.js";

const router = express.Router();

// 🔹 Login (No changes needed, this is correct)
router.post("/login", async (req, res) => {
  const { empId, password } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM employees WHERE emp_id = ? AND password = ?",
      [empId, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = rows[0];
    res.json({
      employee_id: user.emp_id,
      empId: user.emp_id,
      emp_name: user.emp_name,
      message: "Login successful",
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔹 Profile (No changes needed, this is correct)
router.get("/profile/:emp_id", async (req, res) => {
  const { emp_id } = req.params;
  try {
    const [rows] = await pool.query(
      // FIX: Added the 'address' column to the SELECT statement
      "SELECT emp_id, emp_name, email, role, mobile_number, onboarding_date, address FROM employees WHERE emp_id = ?",
      [emp_id]
    );

    if (rows.length === 0) return res.status(404).json({ message: "Profile not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error("Profile Fetch Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔹 Submit Leave
router.post("/leaves", async (req, res) => {
  // The frontend service sends 'employee_id' in the body, which contains the actual emp_id string.
  const { employee_id, emp_name, from_date, to_date, session, manager_mail, description } = req.body;

  try {
    // FIX: The column in the 'leaves' table is 'emp_id'.
    const [result] = await pool.query(
      "INSERT INTO leaves (emp_id, emp_name, from_date, to_date, session, manager_mail, description) VALUES (?, ?, ?, ?, ?, ?, ?)",
      // We use the 'employee_id' variable from the request for the 'emp_id' database column.
      [employee_id, emp_name, from_date, to_date, session, manager_mail, description]
    );

    // FIX: The 'leaves' table has no auto-increment id, so we just return a success message.
    res.status(201).json({ message: "Leave submitted successfully" });
  } catch (err) {
    console.error("Error inserting leave:", err);
    res.status(500).json({ error: "Server error while submitting leave" });
  }
});

// 🔹 Payslip
// FIX: The route is changed to use the unique 'emp_id' instead of a name.
router.get("/payslip/:emp_id", async (req, res) => {
  const { emp_id } = req.params;

  try {
    // FIX: Query the 'payslip' table using the 'emp_id' column.
    const [payslipRows] = await pool.query(
      "SELECT * FROM payslip WHERE emp_id = ?",
      [emp_id]
    );

    if (payslipRows.length === 0) {
      return res.status(404).json({ message: "No payslip found for this employee." });
    }

    // Return the found payslip data. If multiple exist, this returns the first one.
    res.json(payslipRows[0]);

  } catch (err)
  {
    console.error("Server error fetching payslip:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;