import mongoose from 'mongoose';

// Define schema for card status
const cardStatusSchema = new mongoose.Schema({
  CardID: {
    type: String,
    required: true,
    unique: true,
  },
  UserMobile: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['generated', 'picked_up', 'delivered', 'unknown', 'returned'],
    required: true,
  },
  deliveryAttempts: {
    type: Number,
    default: 0,
  },
  
}, { timestamps: true });


const CardStatus = mongoose.model('CardStatus', cardStatusSchema);

export default CardStatus;
