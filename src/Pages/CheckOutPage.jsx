import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // To capture query parameters

const CheckoutPage = () => {
  const [tokens, setTokens] = useState(100);
  // const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // Tracks payment success/failure
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState(""); // Email state

  const location = useLocation(); // Get query params from the URL

  useEffect(() => {
    // Check if the user has been redirected with a success or cancelled status
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");
    if (status === "success") {
      setPaymentStatus("success");
    } else if (status === "cancelled") {
      setPaymentStatus("cancelled");
    }
  }, [location.search]);

  const handleTokenChange = (event) => {
    setTokens(Number(event.target.value));
  };

  const handleProceedPayment = async () => {
    try {
      const response = await axios.post("http://localhost:5005/api/saveData", {
        name,
        wallet,
        email,
        tokens,
      });

      // Redirect to Stripe Checkout
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error proceeding with payment:", error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleWalletChange = (event) => {
    setWallet(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Checkout</h2>
          <p className="mb-6 text-gray-700">
            Fill out your details, select the number of tokens, and proceed to
            payment.
          </p>
        </div>

        {/* Show success or failure message */}
        {paymentStatus === "success" && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
            Payment successful! Thank you for your purchase.
          </div>
        )}

        {paymentStatus === "cancelled" && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            Payment was cancelled. Please try again.
          </div>
        )}

        {/* User Details Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Your Details
          </h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="wallet"
                className="block mb-2 font-medium text-gray-800"
              >
                Wallet Address (ERC20 Only)
              </label>
              <input
                type="text"
                id="wallet"
                value={wallet}
                onChange={handleWalletChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter ERC20 wallet address"
              />
            </div>
          </form>
        </div>

        {/* Token Selection Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Select Tokens
          </h3>

          {/* Dropdown for selecting tokens */}
          <select
            className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={tokens}
            onChange={handleTokenChange}
          >
            {/* Options in multiples of 100 up to 2000 */}
            {[...Array(100).keys()].map((i) => {
              const tokenValue = (i + 1) * 100;
              return (
                <option key={tokenValue} value={tokenValue}>
                  {tokenValue} Tokens
                </option>
              );
            })}
          </select>

          {/* Display the total amount */}
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Amount: ${tokens}
          </div>

          {/* Proceed to Payment Button */}
          <button
            onClick={handleProceedPayment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
