type FeedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  feedback: string;
  daysAgo: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
        </svg>
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.feedback}</p>
      </div>
      <p>{feedbackItem.daysAgo} days ago</p>
    </li>
  );
}
