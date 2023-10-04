import { Chip, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState, useEffect } from "react";

const Header = ({ selectedQuestion, data, selectedQuestionIndex }) => {
  const currentQuestion = selectedQuestionIndex + 1;
  const totalQuestion = data.length;
  const initialTimerValue = 120; // 2 minutes in seconds (2 * 60)
  const localStorageKey = "timerValues";

  // Initialize the timer values from localStorage or with initial values
  const initialTimerValues = JSON.parse(localStorage.getItem(localStorageKey)) || Array(totalQuestion).fill(initialTimerValue);
  const [timers, setTimers] = useState(initialTimerValues);
  const [timeoutMessages, setTimeoutMessages] = useState(data.map(() => null));

  // Update the timers for each question individually
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer, index) =>
          index === selectedQuestionIndex && timer > 0 ? timer - 1 : timer
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedQuestionIndex, data]);

  // Check if the timers for all questions have reached 0
  useEffect(() => {
    const allTimersZero = timers.every((timer) => timer <= 0);

    if (allTimersZero) {
      setTimeoutMessages(data.map(() => "Timeout!"));
    } else {
      setTimeoutMessages(data.map(() => null));
    }

    // Store the timers in localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(timers));
  }, [timers, data]);

  // Format the timer value as minutes and seconds
  const formattedTimer = `${Math.floor(timers[selectedQuestionIndex] / 60)
    .toString()
    .padStart(2, "0")}:${(timers[selectedQuestionIndex] % 60).toString().padStart(2, "0")}`;

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
            label={timeoutMessages[selectedQuestionIndex] || formattedTimer}
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
