import express from "express";
import { signUp,login, logout, dashboard,verifyEmail,forgotPassword,resetPassword,} from "../controllers/user.controller.js";
import { authorization } from "../middleware/authorized.js";
import { contactForm,getContactForm } from "../controllers/client.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/dashboard",authorization, dashboard);
router.post("/logout",authorization, logout);
router.post("/verify", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:resetPasswordOtp", resetPassword);
router.post("/contact-form", contactForm);
router.get("/getContactForm", getContactForm);

export default router;