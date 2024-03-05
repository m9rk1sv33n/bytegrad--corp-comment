import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../lib/types";

type ContainerProps = {
  isLoading: boolean;
  error: string | null;
  feedbackItems: TFeedbackItem[];
};

export default function FeedbackList({
  isLoading,
  error,
  feedbackItems,
}: ContainerProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
