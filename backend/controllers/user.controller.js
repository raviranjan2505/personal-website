import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import {z} from "zod";
import { generateTokenAndSaveCookies } from "../jwt/token.js";
import { sendEmail,senWelcomeEmail,sendPasswordResetEmail,sendResetSuccessEmail } from "../mail/mail.js";

const userSchema = z.object({
   

    email:z.string().email({message:"invalid email address"}),
    username:z.string().min(3,{message:"Username alteast 3 characters long"}),
    password:z.string().min(8,{message:"Password alteast 8 characters long"}),

})

export const signUp = async(req, res) =>{
   try{
    const {email, username,gender, password} = req.body;

    if(!email || !username || !gender || !password){
        return res.status(400).json({error:"All fields are required"})
    }
    const validation = userSchema.safeParse({ email, username, password });
    if(!validation.success){
        const errorMessage = validation.error.errors.map((err)=>{return err.message})
        return res.status(400).json({message:errorMessage})
    }

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({error:"User already exists"})
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationOtp = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new User({
        email,
        username,
        gender,
        password: hashedPassword,
        verificationOtp,
        verificationOtpExpiresAt:Date.now() + 24 * 60 * 60 * 1000,

        });
    
    await newUser.save();
    const token = await generateTokenAndSaveCookies(newUser._id, res);
    if(newUser){
        res.status(201).json({message:"User registered successfully", newUser,token})
    }
    await sendEmail(newUser.email,verificationOtp) 
   }catch(error){
    res.status(500).json({message:"internal server error during signup", error});
   }
}

export const verifyEmail = async(req, res) => {
    try{
        const {otp} = req.body;
        const user = await User.findOne({verificationOtp:otp,verificationOtpExpiresAt:{$gt:Date.now()}});
        if(!user){
            return res.status(404).json({error:"Invalid OTP or expired OTP"})
        }

        user.isVerified = true;
        user.verificationOtp = undefined;
        user.verificationOtpExpiresAt = undefined;

        await user.save();
        await senWelcomeEmail(user.email,user.username)
      
        return res.status(200).json({message:"Email verified successfully"})

    }catch(error){
        return res.status(500).json({message:"internal server error during email verification"})
    }
}
export const login = async (req, res) => {
    try {
      const { usernameOrEmail, password } = req.body;
      console.log(usernameOrEmail);
  
      if (!usernameOrEmail || !password) {
        return res.status(400).json({ error: "Email or username is required" });
      }
  
      const user = await User.findOne({
        $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      }).select('password isVerified role');
  
      console.log(user);
      
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      console.log(user.isVerified);
      
      if (!user.isVerified) {
        await User.deleteOne({ _id: user._id });
        return res.status(403).json({ error: "Email not verified" });
      }
  
      const isPasswordMatch = await bcryptjs.compare(password, user.password);
      
      if (!isPasswordMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      const token = await generateTokenAndSaveCookies(user._id, res);
      console.log(token);
  
      return res.status(200).json({ message: "User login successful!", user, token });
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      return res.status(401).json({ message: "User login failed" });
    }
  };
  

export const logout = async(req,res) => {
    try{
        res.clearCookie("jwt",{
            path:"/"
        });
        
        return res.status(200).json({message:"User logged out successfully"})
    }catch(error){
        return res.status(500).json({message:"error in logout"})
    }
}
export const dashboard = async(req, res) =>{
    try{
        const user = await User.findById(req.user._id)
        if(!user){
            return res.status(404).json({error:"User not found"})
        }
        return res.status(200).json({message:"User dashboard", user})
    }catch(error){
        return res.status(500).json({message:"internal server error during dashboard"})
    }
}

export const forgotPassword = async (req, res) => {
        const { email } = req.body;
        console.log(email)
        try {
            const user = await User.findOne({ email });
            console.log(user)
            if (!user) {
                return res.status(400).json({ success: false, message: "User not found" });
            }
    
            // Generate reset token
            const resetPasswordOtp = Math.floor(100000 + Math.random() * 900000).toString();
            const resetPasswordExpiresA = Date.now() + 1 * 60 * 60 * 1000; // 1 hour
    
            user.resetPasswordOtp = resetPasswordOtp;
            user.resetPasswordExpiresAt = resetPasswordExpiresA;
    
            await user.save();
            console.log(process.env.CLIENT_URL)
            // send email
            await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}reset-password/${resetPasswordOtp}`);
    
            res.status(200).json({ success: true, message: "Password reset link sent to your email" });
        } catch (error) {
            console.log("Error in forgotPassword ", error);
            res.status(400).json({ success: false, message: error.message });
        }
};

export const resetPassword = async (req, res) => {
	try {
		const { resetPasswordOtp } = req.params;
		const { password } = req.body;
        console.log(resetPasswordOtp);
		const user = await User.findOne({
			resetPasswordOtp,
			resetPasswordExpiresAt: { $gt: Date.now() },
		});
console.log(user);
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
		}

		// update password
		const hashedPassword = await bcryptjs.hash(password, 10);

		user.password = hashedPassword;
		user.resetPasswordOtp = undefined;
		user.resetPasswordExpiresAt = undefined;
		await user.save();

		await sendResetSuccessEmail(user.email);

		res.status(200).json({ success: true, message: "Password reset successful" });
	} catch (error) {
		console.log("Error in resetPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};