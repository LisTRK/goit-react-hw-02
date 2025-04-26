export default function Option({ updateFeedback, valueFeedback }) {
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
      {valueFeedback > 0 && (
        <button
          onClick={() => {
            updateFeedback('reset');
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
