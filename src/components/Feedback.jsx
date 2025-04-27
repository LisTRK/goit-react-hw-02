export default function Feedback({
  dataFeedbacks,
  totalFeedback,
  averageFeedback,
}) {
  return (
    <>
      <div className="feetback">
        <p>good: {dataFeedbacks.good}</p>
        <p>neutral: {dataFeedbacks.neutral}</p>
        <p>bad: {dataFeedbacks.bad}</p>
        <p>total: {totalFeedback}</p>
        <p>positive: {averageFeedback}%</p>
      </div>
    </>
  );
}
