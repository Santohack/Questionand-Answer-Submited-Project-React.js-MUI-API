import { useState, useEffect } from "react";

// Custom hook for fetching data
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

        // Parse the response as JSON
        const responseData = await response.json();

        setData(responseData?.data?.questions);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, []);

  return { data };
}
