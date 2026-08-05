import { Route, Routes } from "react-router";
import "./styles/App.css";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { NotFound } from "./pages/NotFound";
import { Saved } from "./pages/Saved";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/history" element={<History></History>}></Route>
        <Route path="/saved" element={<Saved></Saved>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
