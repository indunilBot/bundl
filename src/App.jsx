import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
