import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logoUnac.png" alt="" />
      </div>
      <div className="icons">
        <button className="button">
         <p>ADMIN</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
