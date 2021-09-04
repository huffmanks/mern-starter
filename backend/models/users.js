import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        full: {
            type: String,
            required: true,
        },
        short: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User