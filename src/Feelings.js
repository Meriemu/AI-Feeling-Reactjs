import React, {useState} from "react";
import axios from "axios";
import {randomFeelings} from "./randomFeelings";

const Feelings = () => {
  const [result, setResult] = useState();
  const [sentimentInput, setSentimentInput] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/cardiffnlp/twitter-xlm-roberta-base-sentiment",
        {
          inputs: sentimentInput,
        },
        {
          headers: {
            Authorization: "Bearer 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",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const labels = response.data[0].reduce(
        (accu, lab) => accu.score > lab.score && accu
      ).label;

      const randomDataResult =
        labels === "negative"
          ? randomFeelings.Negative[
              Math.floor(Math.random() * randomFeelings.Negative.length)
            ]
          : labels === "positive"
          ? randomFeelings.Positive[
              Math.floor(Math.random() * randomFeelings.Positive.length)
            ]
          : labels === "neutral"
          ? randomFeelings.Neutral[
              Math.floor(Math.random() * randomFeelings.Neutral.length)
            ]
          : "NADA " + labels[0];

      setResult(randomDataResult);
    } catch (error) {
      console.error("ERROR", error);
      setResult("ERROR: ", error);
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
      {loader ? (
        // <p className="feeling__loader"></p>
        <p></p>
      ) : (
        result && <div className="feeling__result"> {result}</div>
      )}
      {/* {result && (
        <>
          <p className="feeling__loader"></p>{" "}
          <div className="feeling__result"> {result}</div>
        </>
      )} */}
    </div>
  );
};

export default Feelings;
