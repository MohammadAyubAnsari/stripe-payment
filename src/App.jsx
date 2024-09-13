// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import CheckoutPage from "./Pages/CheckOutPage";
// import ConfirmationPage from "./Pages/ConfirmationPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/confirm" element={<ConfirmationPage />} />
//         <Route path="*" element={<Navigate to="/checkout" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CheckoutPage from "./Pages/CheckOutPage";
// import ConfirmationPage from "./Pages/ConfirmationPage";
// import Header from "./Pages/components/Header";
// import LandingPage from "./Pages/components/LandingPage"; // Import the LandingPage component

function App() {
  return (
    <Router>
      {/* Include the Header component */}
      {/* <Header /> */}

      {/* Define the routes for the app */}
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<CheckoutPage />} />

        {/* Other routes */}
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="/confirm" element={<ConfirmationPage />} /> */}

        {/* Redirect any unknown path to the landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
