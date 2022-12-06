import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerListing from "./PlayerListing";
import PlayerCreate from "./PlayerCreate";
import PlayerEdit from "./PlayerEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerListing />}></Route>
          <Route path="/PlayerCreate" element={<PlayerCreate />}></Route>
          <Route path="/player/edit/:Playerid" element={<PlayerEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
