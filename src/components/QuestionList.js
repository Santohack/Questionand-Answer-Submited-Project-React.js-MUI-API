import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useQuestionList } from '../apis/useFetchQuestionList';
import React from 'react';
import MicNoneIcon from '@mui/icons-material/MicNone';
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
      {data.length && data.map((question, index) => (
          <React.Fragment key={question.id}>
            <ListItem
              button
              sx={{  width: '198px' }}
              onClick={() => handleQuestionClick(question)}
              selected={selectedQuestion?.id === question.id}
            > <MicNoneIcon sx={{ color: '#7893f5',marginLeft:'2px' }} />
              <ListItemText primary={`Question ${question.id}`} />
            </ListItem>
            {index !== data.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default QuestionList;
