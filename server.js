import express from "express";
import bodyParser from 'body-parser';
import generateSentiment from "./src/api/generate_sentiment.js";
import cors from 'cors';

const app = express();

// use the json middleware
app.use(bodyParser.json());

// enable CORS
app.use(cors());

// Route for sentiment analysis
app.post("/generate_sentiment", generateSentiment);

// Start server
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
