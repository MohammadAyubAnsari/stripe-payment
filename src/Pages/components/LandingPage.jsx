const LandingPage = () => {
  return (
    <section id="landing" className="relative w-full h-screen">
      {/* Alert Section */}
      <div className="alert bg-yellow-400 text-black py-2 px-4 text-center">
        <span className="flash font-bold">Token Live on Exchange Now !!</span>{" "}
        <a
          href="https://p2pb2b.com/trade/RLTO_USDT/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-700 font-semibold"
        >
          TRADE on P2B with USDT @ <span className="top-pricing"></span>
        </a>
      </div>

      {/* Landing Background */}
      <div className="landing_background absolute inset-0 overflow-hidden">
        <img
          src="https://ik.imagekit.io/vydznxkzk/images/Sky.webp"
          alt="Sky"
          className="parallax sky absolute top-0 left-0 w-full h-full object-cover"
        />
        <img
          src="https://ik.imagekit.io/vydznxkzk/images/Eth.webp"
          alt="Ethereum"
          className="parallax eth absolute bottom-0 left-10 w-40 h-40"
        />
        <img
          src="https://ik.imagekit.io/vydznxkzk/images/Btc.png"
          alt="Bitcoin"
          className="parallax btc absolute bottom-0 right-10 w-40 h-40"
        />
        <img
          src="https://ik.imagekit.io/vydznxkzk/images/Token.webp"
          alt="Token"
          className="parallax token absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48"
        />
        <img
          src="https://ik.imagekit.io/vydznxkzk/images/Buildings.webp"
          alt="Buildings"
          className="parallax buildings absolute bottom-0 w-full"
        />
      </div>

      {/* Landing Text */}
      <div className="landing-text flex flex-col items-center justify-center h-full w-1/2 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          THE REAL ESTATE CRYPTO CURRENCY
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Digital Revolution for All Real Estate Transactions
        </p>
        <div className="btn_row flex space-x-4">
          {/* <a
            href="https://p2pb2b.com/trade/RLTO_USDT/"
            className="btn btn_gold bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition"
          >
            PARTICIPATE NOW
          </a> */}
          <a
            href="https://real-tok.io/assets/Whitepaper_REAL-TOK_V7.pdf"
            className="btn btn_white bg-white text-gray-900 py-3 px-6 rounded-md hover:bg-gray-200 transition"
          >
            WHITEPAPER
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
