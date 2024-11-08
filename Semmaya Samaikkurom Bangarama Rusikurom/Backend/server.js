const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://jeevarp22eie:1234%40jeeva@cluster0.kvwm3.mongodb.net/recipie?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Define a schema for feedback
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST route to handle feedback submission
app.post('/api/feedback', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    
    // Create a new feedback entry
    const feedback = new Feedback({
        name,
        email,
        message
    });
    
    try {
        await feedback.save();
        res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit feedback' });
    }
});

// GET route to fetch all feedback
app.get('/api/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks); // Send all feedbacks as a response
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve feedback' });
    }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
