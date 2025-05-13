import mongoose from 'mongoose';

const whiteEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  description: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const WhiteEmail = mongoose.model('WhiteEmail', whiteEmailSchema);

export default WhiteEmail; 