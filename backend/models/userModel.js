import mongoose, { trusted } from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: trusted
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;