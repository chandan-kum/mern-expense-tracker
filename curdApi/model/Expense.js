const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    title: String,
    date: String,
    name: String,
    amount: String
});

module.exports = mongoose.model("Expense", expenseSchema);