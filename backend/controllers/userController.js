import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Register User'
    });
});

// @desc    Login user & set token
// @route   POST /api/users/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Login User'
    });
});

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Public

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Logout User'
    });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'User profile'
    });
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Update user profile'
    });
});

export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}