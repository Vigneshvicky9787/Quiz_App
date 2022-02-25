import React, { useState } from "react";
import { Grid, Typography, Box, Paper, Avatar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import CountDownTimer from "./countDownTimer";
import "../App.css";
const useStyles = makeStyles((theme) =>
  createStyles({
    lineHeader1: {
      backgroundColor: "#e46563",
      height: "5px",
      width: "20px",
    },
  })
);

const steps = [
  {
    id: 1,
    questions: "1.Lorem",
    answerOptions: [
      { answerText1: "wswswsw", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },

  {
    id: 2,
    questions: "2.Lorem",
    answerOptions: [
      { answerText1: "2Apple", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
  {
    id: 3,
    questions: "3.Lorem",
    answerOptions: [
      { answerText1: "2Applews", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
  {
    id: 4,
    questions: "4.Lorem",
    answerOptions: [
      { answerText1: "2Apple", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Bananwswsa", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
  {
    id: 5,
    questions: "5.Lorem",
    answerOptions: [
      { answerText1: "2Appwswsle", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
  {
    id: 6,
    questions: "6.Lorem",
    answerOptions: [
      { answerText1: "2Apple", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
  {
    id: 7,
    questions: "7.Lorem",
    answerOptions: [
      { answerText1: "2Apple", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
  {
    id: 8,
    questions: "8.Lorem",
    answerOptions: [
      { answerText1: "2Apple", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },

  {
    id: 9,
    questions: "9.Lorem",
    answerOptions: [
      { answerText1: "2Apple", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
  {
    id: 10,
    questions: "10.Lorem",
    answerOptions: [
      { answerText1: "wswswsw", isCorrect: false },
      { answerText2: "2Orange", isCorrect: false },
      { answerText3: "2Banana", isCorrect: true },
      { answerText4: "2Grapes", isCorrect: false },
    ],
  },
];

const stepperTheme = createTheme({
  palette: {
    primary: {
      main: "#e46563",
      dark: "#e46590",
      light: "#e46540",
    },
  },
});
const optionBtnTheme = createTheme({
  palette: {
    primary: {
      main: "#e46563",
      dark: "#e46590",
      light: "#e46540",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const minSecs = { minutes: 0, seconds: 10 };

function QuizHeader() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answers");

  const handleNext = () => {
    minSecs.seconds = 0
      ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
      : (activeStep = 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Grid container flexDirection="column" sx={{ px: 5 }}>
        <Grid item width="100%" sx={{ mb: 5 }}>
          <Grid container justifyContent="space-between">
            <Grid
              item
              flexBasis="27%"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  height: "8px",
                  width: "100%",
                  background: "linear-gradient(-90deg, #e46563, #fff)",
                  borderRadius: "0 12px 12px 0",
                }}
              ></Box>
            </Grid>
            <Grid item flexBasis="40%" align="center">
              <Typography
                variant="h4"
                color="#e46563"
                sx={{ fontWeight: "420", fontSize: "34px" }}
              >
                General Knowledge
              </Typography>
            </Grid>
            <Grid
              item
              flexBasis="27%"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  height: "8px",
                  width: "100%",
                  background: "linear-gradient(90deg, #e46563, #fff)",
                  borderRadius: "12px 0 0 12px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item width="100%">
          <Paper elevation={5} sx={{ borderRadius: "12px" }}>
            <Grid container>
              <Grid item flexBasis="85%" sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Grid container flexDirection="row" alignItems="center">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="#9f9f9f"
                      sx={{
                        ml: "5px",
                      }}
                    >
                      Question
                    </Typography>
                  </Grid>
                  <Grid item>
                    <MobileStepper
                      variant="text"
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      sx={{
                        color: "#9f9f9f",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item width="100%">
                  <ThemeProvider theme={stepperTheme}>
                    <MobileStepper
                      className="mobileStepperTheme"
                      variant="progress"
                      steps={10}
                      position="static"
                      activeStep={activeStep}
                      color="primary.main"
                    />
                  </ThemeProvider>
                </Grid>
              </Grid>
              <Grid
                item
                flexBasis="15%"
                alignItems="center"
                borderRadius="0 12px 12px 0"
                sx={{
                  px: 1,
                  background: "linear-gradient(30deg, #f8579b, #ff5760)",
                }}
              >
                <Typography
                  variant="h5"
                  color="#ff5760"
                  bgcolor="#fff"
                  borderRadius="5px"
                  align="center"
                >
                  <CountDownTimer
                    minSecs={minSecs}
                    onLoad={handleNext}
                    
                  ></CountDownTimer>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item width="100%" sx={{ mt: 3 }}>
          <Grid container flexDirection="column">
            <Grid item>
              <Paper
                square
                elevation={3}
                sx={{
                  display: "flex",
                  height: 100,
                  bgcolor: "#fff",
                  borderRadius: "12px",
                }}
              >
                <Box
                  width="10px"
                  height="100%"
                  bgcolor="#ff5760"
                  borderRadius="12px 0 0 12px"
                ></Box>
                <Grid item sx={{ pl: 1, pt: 2 }}>
                  <Typography variant="subtitle1" color="#e46563">
                    {steps[activeStep].questions}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Grid container flexDirection="column">
                <Box sx={{ width: "100%" }}>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="#e46563"
                      sx={{ my: 2 }}
                    >
                      Answers:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ThemeProvider theme={optionBtnTheme}>
                      <Grid
                        container
                        justifyContent="space-between"
                        spacing={2}
                      >
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            fullWidth
                            className="answers correct"
                          >
                            <Avatar
                              sx={{
                                backgroundColor: "#f1f1f1",
                                color: "#e46563",
                                mx: 2,
                                fontSize: "16px",
                              }}
                              size="small"
                            >
                              A
                            </Avatar>
                            {steps[activeStep].answerOptions.map((a) => (
                              <Typography variant="subtitle2">
                                {a.answerText1}
                              </Typography>
                            ))}
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            fullWidth
                            className="answers"
                            onClick={handleNext}
                          >
                            <Avatar
                              sx={{
                                backgroundColor: "#f1f1f1",
                                color: "#e46563",
                                mx: 2,
                                fontSize: "16px",
                              }}
                              size="small"
                            >
                              B
                            </Avatar>
                            {steps[activeStep].answerOptions.map((a) => (
                              <Typography variant="subtitle2">
                                {a.answerText2}
                              </Typography>
                            ))}
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            fullWidth
                            className="answers"
                          >
                            <Avatar
                              sx={{
                                backgroundColor: "#f1f1f1",
                                color: "#e46563",
                                mx: 2,
                                fontSize: "16px",
                              }}
                              size="small"
                            >
                              C
                            </Avatar>
                            {steps[activeStep].answerOptions.map((a) => (
                              <Typography variant="subtitle2">
                                {a.answerText2}
                              </Typography>
                            ))}
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            fullWidth
                            className="answers"
                          >
                            <Avatar
                              sx={{
                                backgroundColor: "#f1f1f1",
                                color: "#e46563",
                                mx: 2,
                                fontSize: "16px",
                              }}
                              size="small"
                            >
                              D
                            </Avatar>
                            {steps[activeStep].answerOptions.map((a) => (
                              <Typography variant="subtitle2">
                                {a.answerText4}
                              </Typography>
                            ))}
                          </Button>
                        </Grid>
                      </Grid>
                    </ThemeProvider>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default QuizHeader;
