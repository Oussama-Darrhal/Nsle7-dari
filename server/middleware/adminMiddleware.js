export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
};

export const proOrAdminOnly = (req, res, next) => {
  if (req.user && (req.user.role === 'pro' || req.user.role === 'admin')) {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized, professional or admin role required' });
  }
}; 