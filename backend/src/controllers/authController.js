const User  = require("../models/User")
const bcrypt = require("bcryptjs")

const generateToken = require("../utils/generateToken")

// resgiter User 

exports.registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body 
         if (!name || !email || !password) {
            return res.status(400).json({messsage: "please Fill the fileds"})

         };
         const userExsit = await  User.findOne({email}) 

         //exsiting User

         if (userExsit) {
            return res.status(400).json({meassage: " User alreday exist"})}
        
        // Pasword hashing
           const salt = await bcrypt.genSalt(10)
           const hashPassword = await bcrypt.hash(password, salt)

         // Craete User 

         const user = await User.create({
            name,
            email,
            password: hashPassword
         });
         res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
         });
 }

catch (error) {
    return res.status(500).json({message: error.message})

}
}

//Login User 

exports.loginUser = async (req, res) => {
    try {
        const {email,password} = req.body
        
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: "Invalid email, password"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) {
            return res.status(401).json({message: "Invalid email or password"})
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });

    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

//Get profile 
exports.getProfile = async (req, res) => {
    res.json(req.user)
};