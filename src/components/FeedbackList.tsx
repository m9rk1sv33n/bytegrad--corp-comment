import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    id: 1,
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, labore illum? #Bytegrad Fugit adipisci quos eius!",
    daysAgo: 4,
  },
  {
    id: 2,
    upvoteCount: 403,
    badgeLetter: "S",
    companyName: "Starbucks",
    feedback:
      "Lorem ipsum #Starbucks onsectetur adipisicing elit. Repudiandae, labore illum? Fugit adipisci quos eius!",
    daysAgo: 1,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
