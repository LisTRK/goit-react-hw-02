import './App.css';
import { useEffect, useState } from 'react';
import Description from './components/Description';
import Options from './components/Options.jsx';
import Feedback from './components/Feedback.jsx';
import Notification from './components/Notification.jsx';

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
  const averageFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks.good, feedbacks.neutral, feedbacks.bad]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} valueFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          dataFeedbacks={feedbacks}
          totalFeedback={totalFeedback}
          averageFeedback={averageFeedback}
        />
      )}
    </>
  );
}

export default App;
