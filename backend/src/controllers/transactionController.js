const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
    try {
        const {title, amount, category, date, notes} = req.body 

        const transaction = await Transaction.create({
            user: req.user._id,
            title,
            amount,
            category,
            date,
            notes,
        })

        res.status(201).json(transaction);

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

// Get all user 
exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.find({user: req.user._id})
        .sort({date: -1});

        res.json(transaction)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//Get single transaction 

exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction || transaction.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({message: "Transaction not Found"});
        }

        res.json(transaction);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Update transaction 

exports.updateTransaction = async (req, res) => {
    try {
        let transaction = await Transaction.findById(req.params.id);

        if (transaction || transaction.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({message: "Transaction not found"})
        }

        transaction = await Transaction.findByIdAndupdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(transaction)
    }catch (error) {
        res.status(500).json({message: error.message})
    }
};

//Delete Transaction  

exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.Id);

        if (!transaction || transaction.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({message: "Transaction not found"})
        }
        await transaction.deleteOne()

        res.json({messsage: "Transaction removed"})
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}