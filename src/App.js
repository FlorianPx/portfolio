import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";

import "./App.css";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <Card />
    </div>
  );
}

export default App;
