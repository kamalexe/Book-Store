import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req, res) => {
    try{
        const { fullName, email, password } = req.body;
        const user = await User.findOne({ email});
        if(user){
        return res.status(400).json({error: 'Email already exists.'});    
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({ fullName, email,password: hashedPassword });
        await createdUser.save();
        res.status(201).json({message:"Success"});
    }catch(e){
        console.error(e);
        res.status(500).json({error: 'An error occurred while signing up.'});
    }
}


export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid user Id' });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcryptjs.compare(password, user.password);

        // If passwords do not match, return an error
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        else{
            res.status(200).json({message:'Login successful', user: {_id:user._id,fullName:user.fullName,email:user.email}});
        }
    }catch(e){
        console.log(e);
        res.status(500).json({error: 'An error occurred while logging in.'});
    }
};