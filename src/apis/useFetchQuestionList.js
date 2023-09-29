import { useState, useEffect } from "react";

export function useQuestionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.visionlanguageexperts.in/api/questions"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        setData(responseData?.data?.questions);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return { data };
}
