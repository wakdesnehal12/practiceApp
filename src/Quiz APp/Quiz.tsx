import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { isTemplateExpression } from "typescript";
import questionData from "./questionData";

const Quiz = () => {
  const [question, setQuestion] = useState(questionData);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  //   console.log(question);

  const selectOption = (opt: any, id: any) => {
    const updatedList = question.map((item: any, idx: any) => {
      if (idx == id) {
        item.givenAnswer = opt;
      }
      return item;
    });
    setQuestion(updatedList);
  };
  //   console.log(question);
  const nextQuestion = () => {
    currentQuestion < question.length - 1 &&
      setcurrentQuestion((pre) => pre + 1);
  };
  const submitAnswers = () => {
    // let score = 0;
    const updatedList = question.filter(
      (item: any, idx: any) => item.givenAnswer == item.answer
    );
    alert("Score is" + updatedList.length);
  };
  return (
    <>
      <Box>
        <Typography sx={{ textAlign: "center" }} variant="h2">
          Quiz Game
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4">
              {question[currentQuestion].question}
            </Typography>

            {question[currentQuestion].options.map(
              (opt: string, index: any) => {
                return (
                  <>
                    <Box>
                      <Typography
                        onClick={() => selectOption(opt, currentQuestion)}
                        variant="h5"
                        sx={{ cursor: "pointer" }}
                      >
                        {opt}
                      </Typography>
                    </Box>
                  </>
                );
              }
            )}
            {question[currentQuestion].givenAnswer.length > 0 &&
              (question[currentQuestion].answer ==
              question[currentQuestion].givenAnswer
                ? "Answer is correct :- " + question[currentQuestion].answer
                : "Wrong Answer. Correct answer is :- " +
                  question[currentQuestion].answer)}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentQuestion == question.length - 1 ? (
            <Button onClick={submitAnswers}>Submit</Button>
          ) : (
            <Button onClick={nextQuestion}>Next Question</Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Quiz;
