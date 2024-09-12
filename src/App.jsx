import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CheckoutPage from "./Pages/CheckOutPage";
import ConfirmationPage from "./Pages/ConfirmationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="*" element={<Navigate to="/checkout" />} />
      </Routes>
    </Router>
  );
}

export default App;
