import Command from '../model/Command.js';

// @desc    Create a new command
// @route   POST /api/commands
// @access  Private
export const createCommand = async (req, res) => {
  try {
    const { category, rangePrice, city, description, attachments } = req.body;
    
    const command = await Command.create({
      user: req.user._id,
      category,
      rangePrice,
      city,
      description,
      attachments: attachments || []
    });
    
    res.status(201).json(command);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all commands (with filters)
// @route   GET /api/commands
// @access  Private
export const getCommands = async (req, res) => {
  try {
    const { category, city, status } = req.query;
    
    // Build filter object
    const filter = {};
    
    // Only pro and admin users can see all commands
    // Regular users can only see their own commands
    if (req.user.role === 'user') {
      filter.user = req.user._id;
    }
    
    if (category) filter.category = category;
    if (city) filter.city = city;
    if (status) filter.status = status;
    
    const commands = await Command.find(filter)
      .populate('user', 'firstname lastname email phone')
      .populate('assignedTo', 'firstname lastname email phone')
      .sort({ createdAt: -1 });
      
    res.json(commands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get command by ID
// @route   GET /api/commands/:id
// @access  Private
export const getCommandById = async (req, res) => {
  try {
    const command = await Command.findById(req.params.id)
      .populate('user', 'firstname lastname email phone')
      .populate('assignedTo', 'firstname lastname email phone');
    
    if (command) {
      // Check if user is authorized to see this command
      if (req.user.role === 'user' && command.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized to access this command' });
      }
      
      res.json(command);
    } else {
      res.status(404).json({ message: 'Command not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update command
// @route   PUT /api/commands/:id
// @access  Private
export const updateCommand = async (req, res) => {
  try {
    const command = await Command.findById(req.params.id);
    
    if (!command) {
      return res.status(404).json({ message: 'Command not found' });
    }
    
    // Only the command creator or admin can update it
    if (command.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this command' });
    }
    
    // If the command is already in progress or completed, only status can be updated
    if (command.status !== 'pending' && req.user.role !== 'admin') {
      if (req.body.category || req.body.rangePrice || req.body.city || req.body.description) {
        return res.status(400).json({ 
          message: 'Cannot update details of a command that is already in progress or completed' 
        });
      }
    }
    
    // Update fields
    if (req.body.category) command.category = req.body.category;
    if (req.body.rangePrice) command.rangePrice = req.body.rangePrice;
    if (req.body.city) command.city = req.body.city;
    if (req.body.description) command.description = req.body.description;
    if (req.body.status) command.status = req.body.status;
    if (req.body.attachments) command.attachments = req.body.attachments;
    
    // Only admin or pro users can assign commands
    if (req.body.assignedTo && (req.user.role === 'admin' || req.user.role === 'pro')) {
      command.assignedTo = req.body.assignedTo;
    }
    
    const updatedCommand = await command.save();
    
    res.json(updatedCommand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete command
// @route   DELETE /api/commands/:id
// @access  Private
export const deleteCommand = async (req, res) => {
  try {
    const command = await Command.findById(req.params.id);
    
    if (!command) {
      return res.status(404).json({ message: 'Command not found' });
    }
    
    // Only the command creator or admin can delete it
    if (command.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this command' });
    }
    
    // Only pending commands can be deleted
    if (command.status !== 'pending' && req.user.role !== 'admin') {
      return res.status(400).json({ 
        message: 'Cannot delete a command that is already in progress or completed' 
      });
    }
    
    await command.deleteOne();
    
    res.json({ message: 'Command removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get command categories
// @route   GET /api/commands/categories
// @access  Public
export const getCategories = async (req, res) => {
  try {
    // Extract categories from the schema
    const categories = Command.schema.path('category').enumValues;
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Assign a professional to a command
// @route   PUT /api/commands/:id/assign
// @access  Private/Pro
export const assignCommand = async (req, res) => {
  try {
    const command = await Command.findById(req.params.id);
    
    if (!command) {
      return res.status(404).json({ message: 'Command not found' });
    }
    
    // Only pro users can assign themselves to commands
    if (req.user.role !== 'pro' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Only professionals can take commands' });
    }
    
    // Check if command is already assigned
    if (command.assignedTo && command.status !== 'pending') {
      return res.status(400).json({ message: 'Command is already assigned to a professional' });
    }
    
    command.assignedTo = req.user._id;
    command.status = 'in_progress';
    
    const updatedCommand = await command.save();
    
    res.json(updatedCommand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Complete a command
// @route   PUT /api/commands/:id/complete
// @access  Private/Pro
export const completeCommand = async (req, res) => {
  try {
    const command = await Command.findById(req.params.id);
    
    if (!command) {
      return res.status(404).json({ message: 'Command not found' });
    }
    
    // Only the assigned pro or admin can complete a command
    if (
      (command.assignedTo && command.assignedTo.toString() !== req.user._id.toString()) && 
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized to complete this command' });
    }
    
    // Only in-progress commands can be completed
    if (command.status !== 'in_progress') {
      return res.status(400).json({ message: 'Only in-progress commands can be completed' });
    }
    
    command.status = 'completed';
    
    const updatedCommand = await command.save();
    
    res.json(updatedCommand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 