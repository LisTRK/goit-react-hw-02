export default function Feedback({ dataFeedbacks, totalFeedback }) {
  return (
    <>
      {totalFeedback === 0 ? (
        <p className="noFeedback">No feedback yet</p>
      ) : (
        <div className="feetback">
          <p>good: {dataFeedbacks.good}</p>
          <p>neutral: {dataFeedbacks.neutral}</p>
          <p>bad: {dataFeedbacks.bad}</p>
          <p>total: {totalFeedback}</p>
          <p>
            positive: {Math.round((dataFeedbacks.good / totalFeedback) * 100)}%
          </p>
        </div>
      )}
    </>
  );
}
