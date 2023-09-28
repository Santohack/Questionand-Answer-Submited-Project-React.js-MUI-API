import { Button, Container, Divider, TextareaAutosize, Typography, styled } from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";

const SubmittedAnswer = ({ selectedQuestionIndex,data, setSelectedQuestionIndex }) => {
  const ButtonWithIcon = styled(Button)(() => ({
    borderRadius: "16px",

    alignItems: "center",
    justifyContent: "center",
  }));
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };
  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 1191px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  const handleNextClick = () => {
    if (selectedQuestionIndex < data.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
      console.log('Next clicked. New index:', selectedQuestionIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
      console.log('Previous clicked. New index:', selectedQuestionIndex - 1);
    }
  };
 // Check if there are no previous questions
 const isPreviousDisabled = selectedQuestionIndex === 0;

 // Check if there are no more questions
 const isNextDisabled = selectedQuestionIndex === data.length - 1;
  console.log('Selected index:', selectedQuestionIndex);
  console.log('Question data:', data);
  return (
    <>
      <Container maxWidth="xl" sx={{ display: "flex", gap: 3 }}>
        <ButtonWithIcon variant="contained" endIcon={<FastRewindIcon />} onClick={handlePreviousClick} disabled ={isPreviousDisabled}>
          Previous
        </ButtonWithIcon>
        <ButtonWithIcon variant="contained" endIcon={<FastForwardIcon />} onClick={handleNextClick}  disabled={isNextDisabled}>
          Next
        </ButtonWithIcon>

        <ButtonWithIcon
          color="success"
          variant="contained"
          sx={{ marginLeft: "61em" }}
        >
          Submit
        </ButtonWithIcon>
      </Container>
      <Divider sx={{ marginTop: "13px", margin: "18px" }} />
      <Container maxWidth="xl" >
        <Typography pb="5px">Your Submitted Answer</Typography>
        <StyledTextarea aria-label="empty textarea"  minRows={2} placeholder="Your Submitted Answser" />;
      </Container>
    </>
  );
};

export default SubmittedAnswer;
