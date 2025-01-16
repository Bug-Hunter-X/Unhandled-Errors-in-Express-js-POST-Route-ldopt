const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    const user = req.body;
    if (!user || !user.name || !user.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Database interaction or other operations would go here.  Error handling would be added here as well
    console.log('User:', user);
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));