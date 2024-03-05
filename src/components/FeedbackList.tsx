import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedddbacks"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch feedbacks");
        }
        return response.json();
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      })
      .catch(() => {
        //network error, parse error, or response is not ok
        setError("Something went wrong.");
        setIsLoading(false);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {error ? <ErrorMessage message={error} /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
