import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

type FeedbackFormProps = {
  onAddToFeedbackList: (feedback: string) => void;
};

export default function FeedbackForm({
  onAddToFeedbackList,
}: FeedbackFormProps) {
  const [feedback, setFeedback] = useState("");
  const [showValid, setShowValid] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);

  const charCount = MAX_CHARACTERS - feedback.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newFeedback = event.target.value;
    if (newFeedback.length > MAX_CHARACTERS) {
      return;
    }
    setFeedback(newFeedback);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //basic validation
    if (feedback.includes("#") && feedback.length >= 5) {
      setShowValid(true);
      setTimeout(() => setShowValid(false), 3000);
    } else {
      setShowInvalid(true);
      setTimeout(() => setShowInvalid(false), 3000);
      return;
    }

    onAddToFeedbackList(feedback);
    setFeedback("");
  };

  return (
    <form
      className={`form ${showValid ? "form--valid" : ""} ${
        showInvalid ? "form--invalid" : ""
      } `}
      onSubmit={handleSubmit}
    >
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
