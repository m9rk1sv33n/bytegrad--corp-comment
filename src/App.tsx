import { useEffect, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import { TFeedbackItem } from "./lib/types";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Pattern from "./components/Pattern";
import Logo from "./components/Logo";
import PageHeading from "./components/PageHeading";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddToFeedbackList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.startsWith("#"))!
      .substring(1);

    const newFeedback: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.charAt(0).toUpperCase(),
      companyName: companyName,
      text: text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newFeedback]);
  };

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch feedbacks");
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    } catch {
      setError("Something went wrong.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container>
        <Header>
          <Pattern />
          <Logo />
          <PageHeading />
          <FeedbackForm onAddToFeedbackList={handleAddToFeedbackList} />
        </Header>
        <FeedbackList
          feedbackItems={feedbackItems}
          isLoading={isLoading}
          error={error}
        />
      </Container>
      <HashtagList />
    </div>
  );
}
