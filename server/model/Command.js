import mongoose from 'mongoose';

const commandSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'plumbing',
      'electrical',
      'carpentry',
      'painting',
      'roofing',
      'flooring',
      'hvac',
      'appliance_repair',
      'masonry',
      'landscaping',
      'cleaning',
      'renovation',
      'construction',
      'installation',
      'furniture_assembly',
      'locksmith',
      'pest_control',
      'window_repair',
      'pool_maintenance',
      'tiling',
      'insulation',
      'waterproofing',
      'drainage'
    ]
  },
  rangePrice: {
    min: {
      type: Number,
      required: [true, 'Minimum price range is required'],
      min: 0
    },
    max: {
      type: Number,
      required: [true, 'Maximum price range is required'],
      min: 0
    }
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  attachments: [{
    type: String
  }]
}, {
  timestamps: true
});

// Validate that min price is less than max price
commandSchema.pre('validate', function(next) {
  if (this.rangePrice.min > this.rangePrice.max) {
    this.invalidate('rangePrice.min', 'Minimum price must be less than maximum price');
  }
  next();
});

const Command = mongoose.model('Command', commandSchema);

export default Command; 