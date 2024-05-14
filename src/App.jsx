import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SignIn from "./pages/SignIn.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
