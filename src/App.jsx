import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
