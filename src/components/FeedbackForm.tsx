import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const charCount = MAX_CHARACTERS - feedback.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newFeedback = event.target.value;
    if (newFeedback.length > MAX_CHARACTERS) {
      return;
    }
    setFeedback(newFeedback);
  };

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="Enter feedback here"
        spellCheck={false}
        value={feedback}
        onChange={handleChange}
        // maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter feedback here, remember to #hastag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
