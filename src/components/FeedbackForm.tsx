import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const charCount = MAX_CHARACTERS - feedback.length;

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="Enter feedback here"
        spellCheck={false}
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
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
