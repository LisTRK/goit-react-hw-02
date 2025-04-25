export default function Option({ updateFeedback }) {
  return (
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
      <button
        onClick={() => {
          updateFeedback('reset');
        }}
      >
        Reset
      </button>
    </div>
  );
}
