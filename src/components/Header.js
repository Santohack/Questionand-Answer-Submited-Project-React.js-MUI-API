import { Chip, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState, useEffect } from "react";

const Header = ({ selectedQuestion, data, selectedQuestionIndex }) => {
  const currentQuestion = selectedQuestionIndex + 1;
  const totalQuestion = data.length;
  const [timer, setTimer] = useState(60); // 2 minutes in seconds (2 * 60)
  const [timeoutMessage, setTimeoutMessage] = useState(null);

 
  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
       
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      
      setTimeoutMessage("Timeout!");
    }

   
    return () => clearInterval(interval);
  }, [selectedQuestion, selectedQuestionIndex, timer]);


  const formattedTimer = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;

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
            label={timeoutMessage || formattedTimer}
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
