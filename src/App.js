import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/skills/Skills";

import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Notification from "./components/Notification";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Notification />
    </div>
  );
}

export default App;
