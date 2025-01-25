import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authorization = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: "You are not authorized to access this route" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        req.user = user;

        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
