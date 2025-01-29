import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    username: {
        type: 'string',
        required: true,
    },
    gender: { // Change 'male' to 'gender' for better clarity
        type: 'string',
        enum: ['male', 'female', 'other'],
        default: 'other', // Optional: You can set a default value
    },
    password: {
        type: 'string',
        required: true,
        select: false,
    },
    isVerified: { // 'isverified' -> 'isVerified' for camelCase consistency
        type: 'boolean',
        default: false,
    },
    role: {
        type: 'string',
        enum: ['admin', 'user'],
        default: 'user', // Optional: You can set a default value
    },
    token: {
        type: String, // Optional: You may want to specify a more secure type, or use `String` if it's a simple token
    },
    resetPasswordOtp: String,
    resetPasswordExpiresAt: Date,
    verificationOtp: String,
    verificationOtpExpiresAt: Date,
});

const User = mongoose.model('User', userSchema);

export default User;
