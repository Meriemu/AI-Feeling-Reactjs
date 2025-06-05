import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const HF_API_URL =
  "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment";

app.post("/sentiment", async (req, res) => {
  const {inputs} = req.body;

  if (!inputs) return res.status(400).json({error: "Input text is required"});

  try {
    const response = await axios.post(
      HF_API_URL,
      {inputs: inputs},
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error calling Hugging Face API:", error.message);
    res.status(500).json({error: "API request failed"});
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
