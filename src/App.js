import "./App.css";
import Header from "./Components/Header/Header";
import Information from "./Components/Information/Information";
import Welcome from "./Components/Welcome/Welcome";
import Showcase from "./Components/Showcase/Showcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Information />
      <Showcase />
    </div>
  );
}

export default App;
