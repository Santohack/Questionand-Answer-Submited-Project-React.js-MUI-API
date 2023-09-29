import { Button, Container, Divider, Typography, styled } from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { StyledTextField } from "./style";

const SubmittedAnswer = ({
  selectedQuestionIndex,
  data,
  setSelectedQuestionIndex,
}) => {
  const ButtonWithIcon = styled(Button)(() => ({
    borderRadius: "16px",

    alignItems: "center",
    justifyContent: "center",
  }));

  const handleNextClick = () => {
    if (selectedQuestionIndex < data.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
      console.log("Next clicked. New index:", selectedQuestionIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
      console.log("Previous clicked. New index:", selectedQuestionIndex - 1);
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
        />
        ;
      </Container>
    </>
  );
};

export default SubmittedAnswer;
