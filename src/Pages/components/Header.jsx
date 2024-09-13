import CheckoutPage from "../CheckOutPage";

const Header = () => {
  const myMenu = () => {
    const topnav = document.getElementById("topnav");
    if (topnav.classList.contains("hidden")) {
      topnav.classList.remove("hidden");
    } else {
      topnav.classList.add("hidden");
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="logo">
        <a href="/">
          <img
            src="https://ik.imagekit.io/vydznxkzk/images/logo.png"
            alt="logo Real-tok"
            className="h-10"
          />
        </a>
      </div>
      <nav className="hidden md:block">
        <ul id="topnav" className="flex space-x-6 text-gray-700">
          <li>
            <a href="#token" className="hover:text-blue-500">
              Token
            </a>
          </li>
          <li>
            <a href="#vision" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a
              href="assets/Whitepaper_REAL-TOK_V7.pdf"
              className="hover:text-blue-500"
            >
              Whitepaper
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-blue-500">
              Team
            </a>
          </li>
          <li>
            <a href="#aboutReal" className="hover:text-blue-500">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://buy.stripe.com/test_28o6rD3Jk7oKbV63cf"
              className="cta-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Checkout
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="javascript:void(0);"
        className="hamburger md:hidden text-gray-700"
        onClick={myMenu}
      >
        <i className="fa fa-bars text-2xl"></i>
      </a>
    </header>
  );
};

export default Header;
