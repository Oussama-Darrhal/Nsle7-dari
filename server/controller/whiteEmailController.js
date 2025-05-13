import WhiteEmail from '../model/WhiteEmail.js';

// @desc    Add a new whitelisted email
// @route   POST /api/whitelist
// @access  Private/Admin
export const addWhiteEmail = async (req, res) => {
  try {
    const { email, description } = req.body;
    
    const emailExists = await WhiteEmail.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email already whitelisted' });
    }
    
    const whiteEmail = await WhiteEmail.create({
      email,
      description
    });
    
    res.status(201).json(whiteEmail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all whitelisted emails
// @route   GET /api/whitelist
// @access  Private/Admin
export const getWhiteEmails = async (req, res) => {
  try {
    const whiteEmails = await WhiteEmail.find({});
    res.json(whiteEmails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a whitelisted email
// @route   DELETE /api/whitelist/:id
// @access  Private/Admin
export const deleteWhiteEmail = async (req, res) => {
  try {
    const whiteEmail = await WhiteEmail.findById(req.params.id);
    
    if (whiteEmail) {
      await whiteEmail.deleteOne();
      res.json({ message: 'Whitelisted email removed' });
    } else {
      res.status(404).json({ message: 'Whitelisted email not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a whitelisted email status
// @route   PUT /api/whitelist/:id
// @access  Private/Admin
export const updateWhiteEmail = async (req, res) => {
  try {
    const whiteEmail = await WhiteEmail.findById(req.params.id);
    
    if (whiteEmail) {
      whiteEmail.active = req.body.active !== undefined ? req.body.active : whiteEmail.active;
      whiteEmail.description = req.body.description || whiteEmail.description;
      
      const updatedWhiteEmail = await whiteEmail.save();
      res.json(updatedWhiteEmail);
    } else {
      res.status(404).json({ message: 'Whitelisted email not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Check if an email is whitelisted
// @route   GET /api/whitelist/check/:email
// @access  Private
export const checkWhiteEmail = async (req, res) => {
  try {
    const email = req.params.email.toLowerCase();
    const whiteEmail = await WhiteEmail.findOne({ email, active: true });
    
    res.json({
      isWhitelisted: !!whiteEmail
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Helper function to check if email is whitelisted (for internal use)
export const isEmailWhitelisted = async (email) => {
  try {
    const whiteEmail = await WhiteEmail.findOne({ 
      email: email.toLowerCase(),
      active: true
    });
    
    return !!whiteEmail;
  } catch (error) {
    console.error('Error checking whitelisted email:', error);
    return false;
  }
}; 