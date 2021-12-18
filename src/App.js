import react from "react";
import DensityList from "./components/DensityList";
import Settings from "./components/Settings";
import WhachList from "./components/WhachList";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Settings/>
      <WhachList/>
      <DensityList/>
    </div>
  );
}

export default App;