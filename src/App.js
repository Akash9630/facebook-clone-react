import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
