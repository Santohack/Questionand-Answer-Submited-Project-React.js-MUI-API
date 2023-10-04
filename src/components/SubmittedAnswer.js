import { Button, Container, Divider, Typography, styled } from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { StyledTextField } from "./style";

const SubmittedAnswer = ({
  answerSubmitted,
  setAnswerSubmitted,
  submittedAnswer,
  setSubmittedAnswer,
  handleAnswerSubmit,
  selectedQuestionIndex,
  setSelectedQuestionIndex, handleNextClick,
  data,
}) => {
  const ButtonWithIcon = styled(Button)(() => ({
    borderRadius: "16px",

    alignItems: "center",
    justifyContent: "center",
  }));



  const handlePreviousClick = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
      console.log("Previous clicked. New index:", selectedQuestionIndex - 1);
    }
  };

  const handleSubmitClick = async () => {
    if (submittedAnswer.trim() !== "") {
      await handleAnswerSubmit();

      setAnswerSubmitted(true);
    }

  };
  const isPreviousDisabled = selectedQuestionIndex === 0;

  const isNextDisabled = selectedQuestionIndex === data.length - 1;
  console.log("Selected index:", selectedQuestionIndex);
  console.log("Question data:", data);
  return (
    <>
      <Container maxWidth="xl" sx={{ display: "flex", gap: 3 }}>
        <ButtonWithIcon
          variant="contained"
          endIcon={<FastRewindIcon />}
          onClick={handlePreviousClick}
          disabled={isPreviousDisabled}
        >
          Previous
        </ButtonWithIcon>
        <ButtonWithIcon
          variant="contained"
          endIcon={<FastForwardIcon />}
          onClick={handleNextClick}
          disabled={isNextDisabled}
        >
          Next
        </ButtonWithIcon>

        <ButtonWithIcon
          color="success"
          variant="contained"
          sx={{ marginLeft: "61em" }}

          onClick={handleSubmitClick}
        >
          Submit
        </ButtonWithIcon>
      </Container>
      <Divider sx={{ marginTop: "13px", margin: "18px" }} />
      <Container maxWidth="xl">
        <Typography pb="5px">Your Submitted Answer</Typography>
        <StyledTextField
          aria-label="empty textarea"
          minRows={2}
          placeholder="Your Submitted Answser"
          value={answerSubmitted ? submittedAnswer : ""}
        />
        ;
      </Container>
    </>
  );
};

export default SubmittedAnswer;
