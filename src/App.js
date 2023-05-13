import "./App.css";
import Header from "./Components/Header/Header";
import Information from "./Components/Information/Information";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Information />
    </div>
  );
}

export default App;
