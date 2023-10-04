import { Card, Divider, Stack } from "@mui/material";
import QuestionList from "./components/QuestionList";
import Header from "./components/Header";
import FormArea from "./components/FormArea";
import SubmittedAnswer from "./components/SubmittedAnswer";
import { useEffect, useState } from "react";
import { useQuestionList } from "./apis/useFetchQuestionList";
import AlertCard from "./components/Question";


function App() {
  const { data } = useQuestionList();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleAnswerSubmit = async () => {
    try {
      const response = await fetch(
        `https://api.visionlanguageexperts.in/api/store/?question_id=${selectedQuestion.id}&user_id=1&answers=${encodeURIComponent(
          submittedAnswer
        )}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }


      setSubmittedAnswer(submittedAnswer);
    } catch (error) {

      console.error("Error submitting answer:", error);
    }
  };
  const handleNextClick = () => {
    if (selectedQuestionIndex < data.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
      setSubmittedAnswer("");
      console.log("Next clicked. New index:", selectedQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (data.length) {
      setSelectedQuestion(data[selectedQuestionIndex]);
    }
  }, [data, selectedQuestionIndex]);

  return (
    <Card style={{
      margin: '100px',
      borderRadius: '8px'
    }}>
      <Stack direction={'row'} divider={<Divider orientation="vertical" flexItem />}>
        <QuestionList selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} />
        <Stack style={{
          width: '100%',
          height: '750px'
        }}>
          <Header
            selectedQuestion={selectedQuestion}
            data={data}
            selectedQuestionIndex={selectedQuestionIndex}
          />
          <Divider />
          <AlertCard selectedQuestion={selectedQuestion} title={selectedQuestion?.question} />
          <FormArea submittedAnswer={submittedAnswer}
            setSubmittedAnswer={setSubmittedAnswer} />
          <SubmittedAnswer
            handleNextClick={handleNextClick}
            answerSubmitted={answerSubmitted}
            setAnswerSubmitted={setAnswerSubmitted}
            submittedAnswer={submittedAnswer}
            setSubmittedAnswer={setSubmittedAnswer}
            handleAnswerSubmit={handleAnswerSubmit}
            selectedQuestionIndex={selectedQuestionIndex}
            setSelectedQuestionIndex={setSelectedQuestionIndex}
            data={data}

          />

        </Stack>
      </Stack>
    </Card>
  );
}

export default App;
