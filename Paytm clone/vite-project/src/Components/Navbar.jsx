
import "./Navbar.css"; // Create a separate CSS file for styling

const Navbar = ({ openModal }) => {
  return (
    <nav className="navbar">
      <div className="logo">Paytm </div>
      <ul>
        <li><a href="#">Pay</a></li>
        <li><a href="#">Wallet</a></li>
        <li><a href="#">Recharge & Bill</a></li>
        <li><a href="#">More</a></li>
        <li><button onClick={openModal}>Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
