import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import TopNavbar from "./components/topnavbar/TopNavbar";
import {ThemeProvider} from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <TopNavbar />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
