import { Chip, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Header = ({ selectedQuestion, data, selectedQuestionIndex }) => {
  const currentQuestion = selectedQuestionIndex + 1;
  const totalQuestion = data.length;

  return (
    <div
      style={{
        margin: "8px",
      }}
    >
      <Stack spacing={12} direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h5" fontSize={"18px"}>
          {" "}
          {selectedQuestion?.question_name
            ? `#3724 - ${selectedQuestion?.question_name}`
            : "Please select a question to see"}{" "}
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Chip
            color="warning"
            variant="outlined"
            sx={{
              alignItems: "center",
              fontSize: "0.875rem",
              "& svg": {
                fontSize: "1rem",
                marginRight: "4px",
              },
            }}
            icon={<AccessTimeIcon />}
            label="33:33"
          />
          <Chip
            label={`${currentQuestion}/${totalQuestion}`}
            color="info"
            variant="outlined"
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default Header;
