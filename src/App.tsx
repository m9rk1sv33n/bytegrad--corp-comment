import { useEffect, useMemo, useState } from "react";
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
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [selectedCompany, feedbackItems]
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => array.indexOf(company) === index),
    [feedbackItems]
  );

  const handleAddToFeedbackList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.startsWith("#"))!
      .substring(1);

    const newFeedback: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.charAt(0).toUpperCase(),
      company: companyName,
      text: text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newFeedback]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
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
          feedbackItems={filteredFeedbackItems}
          isLoading={isLoading}
          error={error}
        />
      </Container>
      <HashtagList
        handleSelectCompany={handleSelectCompany}
        companyList={companyList}
      />
    </div>
  );
}
