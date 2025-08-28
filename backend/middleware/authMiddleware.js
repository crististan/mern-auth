import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECREDT);

            req.user =  await User.findById(decoded.userId).select('-password');

            next();
        } catch (error) {
            res.status(401);
            throw new Error ('Not authorized (Reason: invalid token)');
        }
    } else {
        res.status(401);
        throw new Error ('Not authorized (Reason: no token)');
    }
});

export { 
    protect 
}