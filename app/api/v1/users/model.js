const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const bcrypt = require('bcryptjs');

let usersSchema = new Schema(
  {
    name: {
        type: String,
        minlength: [3, 'Panjang nama minimal 3 karakter'],
        maxLength: [50, 'Panjang nama maksimal 20 karakter'],
        required: [true, 'Nama harus diisi'],
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Nama harus diisi']
    },

    password: {
        type: String,
        minlength: 6,
        required: [true, 'Password harus diisi']
    },

    role: {
        type: String,
        enum: ['admin','organizer','owner'],
        default: 'admin'
    },

    organizer: {
        type: mongoose.Types.ObjectId,
        ref: 'Organizer',
        required: true
    
    }
  },
  { timestamps: true }
);

usersSchema.pre('save', async function (next){
    const User = this;
    if (User.isModified('password')){
        User.password = await bcrypt.hash(User.password, 12);
    }
    next();
});

usersSchema.methods.comparePassword = async function (candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}


module.exports = model('User', usersSchema);