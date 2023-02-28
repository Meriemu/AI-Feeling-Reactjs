import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  const sentiment = req.body.sentimentInput || "";

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(sentiment),
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: [";"],
    });
    const result = completion.data.choices[0].text;
    console.log("API response:", result);
    res.status(200).json({ result });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        }
      });
    }
  }
}

function generatePrompt(sentiment) {
  const resSentiment =
    sentiment[0].toUpperCase() + sentiment.slice(1).toLowerCase();
  return `tell me in short sentense what is the sentiment of this text: ${resSentiment}`;
}
