import "./App.css";
import Header from "./Components/Header/Header";
import Information from "./Components/Information/Information";
import Welcome from "./Components/Welcome/Welcome";
import Showcase from "./Components/Showcase/Showcase";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Information />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
