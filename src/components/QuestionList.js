import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useQuestionList } from '../apis/useFetchQuestionList';

const QuestionList = ({ selectedQuestion, setSelectedQuestion }) => {
  const { data } = useQuestionList();

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div>
      <Typography style={{
        margin: '8px'
      }} variant="h5" gutterBottom>
        Question List
      </Typography>
      <Divider />
      <List>
        {data.length && data.map((question) => (
          <ListItem
            key={question.id}
            button
            onClick={() => handleQuestionClick(question)}
            selected={selectedQuestion?.id === question.id}
          >
            <ListItemText primary={question.question_name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default QuestionList;
