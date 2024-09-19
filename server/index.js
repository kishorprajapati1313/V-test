const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signroute = require('./Routes/Sign');
const userdata = require('./Routes/Userdata');
const forgotpass = require('./Routes/Forgotpass');
const payment = require('./Routes/Payment');
const image = require('./Routes/Imagedat');

const app = express();

// Define allowed origins
const allowedOrigins = [
  'https://hilarious-banoffee-76d817.netlify.app' // Your current frontend URL
];

// CORS middleware setup
app.use(cors({
  origin: (origin, callback) => {
    // Check if the origin is in the allowed origins list
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    const msg = 'The CORS policy does not allow access from this origin.';
    return callback(new Error(msg), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow OPTIONS for preflight
  credentials: true, // Enable credentials
}));

// Preflight requests
app.options('*', cors());

// Body parsing middleware
app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ limit: '1000mb', extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://bahaxa8848:PTCxSrbm9D11GcgS@cluster01.uuxnv.mongodb.net/commondb?retryWrites=true&w=majority&appName=Cluster01', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err.message));

// Routes setup
app.use(signroute);
app.use(userdata);
app.use(forgotpass);
app.use(payment);
app.use(image);

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
