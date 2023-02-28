import React, { useState } from 'react';
// import generateSentiment from './api/generate_sentiment.js';
import axios from 'axios';

const Feelings = () =>{
  const [result, setResult] = useState();
  const [sentimentInput, setSentimentInput] = useState('');

  // const URL = 'https://meriemu.github.io/AI-Feeling-Reactjs';
  // const URL = 'http://localhost:3003';

  const handleSubmit = async event => {
    event.preventDefault();
    const URL = '/generate_sentiment.js';
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentimentInput: sentimentInput }),
      });
    
      const { result } = await response.json();
    
      setResult( result );
      setSentimentInput('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='feeling__container'>
      <form onSubmit={handleSubmit}>
        <div className='feeling__wrapper'>
           <input
            className='feeling__input'
            type="text"
            id="feeling_text"
            value={sentimentInput}
            onChange={(e) => setSentimentInput(e.target.value)}
            required
          />
          <label htmlFor="feeling_text">Express yourself</label>
          <div className='bar'></div>
        </div>
        <button type="submit" className='feeling__btn'>Submit</button>
      </form>
        <div className='feeling__result'> {result}</div>
    </div>
  );
}

export default Feelings;
