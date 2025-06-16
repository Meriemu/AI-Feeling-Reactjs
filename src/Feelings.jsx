import React, {useState} from "react";
import axios from "axios";
import {randomFeelings} from "./randomFeelings.js";

const Feelings = () => {
  const [result, setResult] = useState();
  const [sentimentInput, setSentimentInput] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    try {
      const response = await axios.post(
        "api/sentiment",
        // "http://localhost:5000/sentiment",
        {
          inputs: sentimentInput,
        }
      );

      const labels = (res) => {
        switch (res) {
          case "LABEL_0":
            return "negative";
          case "LABEL_1":
            return "neutral";
          case "LABEL_2":
            return "positive";
          default:
            return "Unknown feeling";
        }
      };
      const res = response.data[0].reduce(
        (accu, lab) => accu.score > lab.score && accu
      ).label;
  
      const randomDataResult =
        labels(res) === "negative"
          ? randomFeelings.Negative[
              Math.floor(Math.random() * randomFeelings.Negative.length)
            ]
          : labels(res) === "positive"
          ? randomFeelings.Positive[
              Math.floor(Math.random() * randomFeelings.Positive.length)
            ]
          : labels(res) === "neutral"
          ? randomFeelings.Neutral[
              Math.floor(Math.random() * randomFeelings.Neutral.length)
            ]
          : "NADA " + labels(res)[0];

      setResult(randomDataResult);
    } catch (error) {
      console.error("ERROR", error);
      setResult(`ERROR: ${error.message}`);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="feeling">
      <form onSubmit={handleSubmit}>
        <div className="feeling__wrapper">
          <input
            className="feeling__input"
            type="text"
            id="feeling_text"
            value={sentimentInput}
            onChange={(e) => setSentimentInput(e.target.value)}
            aria-live="polite"
            required
          />
          <label htmlFor="feeling_text" className="feeling__label">
            Express yourself
          </label>
          <div className="bar"></div>
        </div>
        <button
          type="submit"
          className="feeling__btn"
          disabled={!sentimentInput}
        >
          Ok !
        </button>
      </form>
      {loader && <p className="feeling__loader"></p>}
      {<div className="feeling__result">{!loader && result}</div>}
    </div>
  );
};

export default Feelings;