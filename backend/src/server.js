const dotenv = require("dotenv")
const express = require("express")



const cors = require("cors")

const connectDB = require("./config/db")

dotenv.config();
connectDB();

const app = express()

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Expensee tracker Api Running")

})

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/transactions", require("./routes//transactionRoutes"))

app.get("/", (req, res) => {
    res.send("Expense tracker Api Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
console.log("JWT SECRET:", process.env.JWT_SECRET);