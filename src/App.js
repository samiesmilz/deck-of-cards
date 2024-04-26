import logo from "./deckOfCards.png";
import Deck from "./Deck";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Deck />
    </div>
  );
}

export default App;
