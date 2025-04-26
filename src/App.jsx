import './App.css';
import { useEffect, useState } from 'react';
import Description from './components/Description';
import Option from './components/Option.jsx';
import Feedback from './components/Feedback.jsx';

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
    if (feedbackType === 'reset')
      setFeedbacks({
        ...feedbacks,
        good: 0,
        neutral: 0,
        bad: 0,
      });
    else
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [totalFeedback]);

  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} valueFeedback={totalFeedback} />
      <Feedback dataFeedbacks={feedbacks} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
