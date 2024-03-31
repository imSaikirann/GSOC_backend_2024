const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); 
const dbRoutes = require('./routes/DiabetiesRoutes')
const AstamaRoutes = require('./routes/AstamaRoutes')
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection string with encoded password 
const username = "saikiran";
const password = encodeURIComponent("hide@1234"); 
const dbName = "ClinicalMatch"; 
const mongoURI = `mongodb+srv://${username}:${password}@cluster0.xkvayy6.mongodb.net/${dbName}`;


app.use(express.json());
 
app.use('/api/db/Diabetes', dbRoutes);  
app.use('/api/db/Asthma',AstamaRoutes)

 
app.use((req, res, next) => {  
    console.log(req.path, req.method);
    next();  
});
 
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Connect to MongoDB and start the server
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected");
    // Start the server and listen on port 3000
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
 