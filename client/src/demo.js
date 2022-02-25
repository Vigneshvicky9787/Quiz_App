import * as React from "react";
import { useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import QuizScreen from "./components/quizScreen";
import JoinScreen from "./components/joinScreen";
import Navbar from "./components/navbar";

const useStyles = makeStyles((theme) =>
  createStyles({
    bgImage: {
      height: "100vh",
      width: "100%",
    },
  })
);
const theme = createTheme();

export default function App() {
  const [Change, setChange] = useState(false);
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Grid className={classes.bgImage}>
          {Change ? (
            <QuizScreen retry={() => setChange(false)} />
          ) : (
            <JoinScreen start={() => setChange(true)} />
          )}
        </Grid>
      </ThemeProvider>
    </>
  );
}
