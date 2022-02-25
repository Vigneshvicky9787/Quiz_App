import { Container, Grid, CssBaseline } from "@mui/material";
import QuizHeader from "./components/QuizHeader";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Container maxWidth="md">
          <Grid container sx={{ py: 5 }}>
            <QuizHeader />
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default App;
