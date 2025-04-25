import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
    console.log(feedbacks[feedbackType]);
  };
  const reset = () => {
    setFeedbacks({
      ...feedbacks,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [totalFeedback]);

  return (
    <>
      <div className="description">
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
      <div className="option">
        <button
          onClick={() => {
            updateFeedback('good');
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            updateFeedback('neutral');
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            updateFeedback('bad');
          }}
        >
          Bad
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      {totalFeedback === 0 ? (
        <p className="noFeedback">No feedback yet</p>
      ) : (
        <div className="feetback">
          <p>good: {feedbacks.good}</p>
          <p>neutral: {feedbacks.neutral}</p>
          <p>bad: {feedbacks.bad}</p>
          <p>total: {totalFeedback}</p>
          <p>positive: {Math.round((feedbacks.good / totalFeedback) * 100)}%</p>
        </div>
      )}
    </>
  );
}

export default App;
