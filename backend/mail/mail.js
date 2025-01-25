import transporter from "./mail.config.js";
import { Verification_Email_Template, Welcome_Email_Template,PASSWORD_RESET_REQUEST_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE } from "./mail.template.js";

export const sendEmail = async (email,verificationOtp) => {
    try{
        const info = await transporter.sendMail({
            from: '"RAVI TRADING PVT. LTD." <raviranjan2505@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Verify your Email", // plain text body
            html:  Verification_Email_Template.replace("{verificationCode}",verificationOtp)
          });
          console.log('Email sent successfully',info)
    }catch(error){
        console.log("message error", error);
    }
}

export const senWelcomeEmail=async(email,username)=>{
    try {
     const response=   await transporter.sendMail({
            from: '"Ravi Ranjan Pvt ltd." <raviranjan2505@gmail.com>',

            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: Welcome_Email_Template.replace("{name}",username)
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
    }
}

export const sendPasswordResetEmail = async (email, resetURL)=>{
    try {
        const response=   await transporter.sendMail({
            from: '"Ravi Ranjan Pvt ltd." <raviranjan2505@gmail.com>',
            to: email, // list of receivers,
            subject: "Password Reset Request", // Subject line
            text: "Password Reset Request", // plain text body
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL)
        })
    }catch(error){
        console.log('Email error in send reset otp',error)
    }
}

export const sendResetSuccessEmail = async(email) => {
    try {
        const response=   await transporter.sendMail({
            from: '"Ravi Ranjan Pvt ltd." <raviranjan2505@gmail.com>',
            to: email, // list of receivers
            subject: "Password Reset Successful", // Subject line
            text: "Password Reset Successful", // plain text body
            html: PASSWORD_RESET_SUCCESS_TEMPLATE
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error in send reset success',error)
    }
}