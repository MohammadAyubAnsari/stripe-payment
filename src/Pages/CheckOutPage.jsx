const CheckoutPage = () => {
  const redirectToStripeCheckout = () => {
    window.location.href = "https://buy.stripe.com/test_28o6rD3Jk7oKbV63cf";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/5 flex">
        <div className="w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <p className="mb-4 text-gray-600">Please proceed to payment.</p>

          <button
            onClick={redirectToStripeCheckout}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
