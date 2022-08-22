
const Expense = require("../model/Expense");

//get all expense
const expense_all = async (req, res) => {
    try {
        const expense = await Expense.find();
        
        res.json(expense);
    } catch {
        res.json({ message: error });
    }
}
//get single expense
const expense_detail = async (req, res) => { 
    try{
        const expense = await Expense.findById(req.params.expenseId);
        res.json(expense);
    }catch{
        res.json({ message: error});
    }
    
}
//add new expense
const expense_create = async (req, res) => {
    const expense = new Expense({
        title: req.body.title,
        date: req.body.date,
        name: req.body.name,
        amount: req.body.amount

    });

    try{
        const saveExpense = await expense.save();
        res.send(saveExpense);
    }catch(error) {
        res.status(400).send(error);
    }
 }

//update expense
const expense_update = async (req, res) => {
    try{
        const expense = {
            title: req.body.title,
            date: req.body.date,
            name: req.body.name,
            amount: req.body.amount
        };

        const updateExpense = await Expense.findByIdAndUpdate(
            { _id: req.params.expenseId },
            expense
        );
        res.json(updateExpense);
    }catch(error){
        res.json({ message: error })
    }
}
//delete expense
const expense_delete = async (req, res) => { 
    try{
        const deletExpense = await Expense.findByIdAndDelete(req.params.expenseId);
        res.json(deletExpense);
    }catch(error){
        res.json({ message: error });
    }
}


module.exports = {
    expense_all,
    expense_detail,
    expense_create,
    expense_update,
    expense_delete
}