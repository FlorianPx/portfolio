import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/skills/Skills";

import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <Skills />
      <Notification />
    </div>
  );
}

export default App;
