const express = require("express")

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    addTransaction,
    getTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
} = require("../controllers/transactionController");


router.post("/", protect, addTransaction)
router.get("/", protect, getTransaction)
router.get("/:id", protect, getTransactionById)
router.put("/:id", protect, updateTransaction)
router.delete("/:id", protect, deleteTransaction)

module.exports = router;