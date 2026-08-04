import { Route, Routes } from "react-router";
import "./styles/App.css";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/history" element={<History></History>}></Route>
      </Routes>
    </>
  );
}

export default App;
