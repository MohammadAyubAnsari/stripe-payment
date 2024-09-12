import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [errors, setErrors] = useState({ name: "", wallet: "" });
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ name: "", wallet: "" });

    let valid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!wallet) {
      newErrors.wallet = "Wallet address is required";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission if valid
    console.log("Form submitted with:", { name, wallet });

    // Redirect to the main page
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h3 className="text-3xl font-semibold mb-4 text-center">
          Enter Your Details
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="wallet" className="block mb-2 font-medium">
              Wallet Address (ERC20 Only)
            </label>
            <input
              type="text"
              id="wallet"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Enter ERC20 wallet address"
            />
            {errors.wallet && (
              <p className="text-red-500 text-sm mt-1">{errors.wallet}</p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-lg w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationPage;
