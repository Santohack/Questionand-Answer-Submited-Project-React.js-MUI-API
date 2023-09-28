import { Card, Divider, Stack } from "@mui/material";
import QuestionList from "./components/QuestionList";
import Header from "./components/Header";
import FormArea from "./components/FormArea";
import SubmittedAnswer from "./components/SubmittedAnswer";
import { useEffect, useState } from "react";
import { useQuestionList } from "./apis/useFetchQuestionList";


function App() {
  const { data } = useQuestionList();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

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
          height: '700px'
        }}>
          <Header 
          selectedQuestion={selectedQuestion}
          data={data}
          selectedQuestionIndex={selectedQuestionIndex}
           />
          <Divider />
          <FormArea />
          <SubmittedAnswer
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
