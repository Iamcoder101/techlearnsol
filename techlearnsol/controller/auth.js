const User = require('../model/user');
const bcrypt = require('bcrypt');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

exports.signup = async (req, res) => {
  const { name, email, mobile_number, gender, password, confirm_password } = req.body;

  if (!passwordRegex.test(password)) return res.status(400).json({ error: 'Weak password' });
  if (password !== confirm_password) return res.status(400).json({ error: 'Passwords do not match' });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, mobile_number, gender, password: hashedPassword });
    await newUser.save();

    console.log(`New user registered: ${email}`);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });

    console.log(`User signed in: ${email}`);
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
