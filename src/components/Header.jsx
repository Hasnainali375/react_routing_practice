import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>
        <h1>
          Hi, I'm Rana Hasnain <br />
          <span style={{ fontSize: "24px", color: "#007bff" }}>
            — Frontend Developer & AI Student
          </span>
        </h1>
        <b>
          Building modern, responsive, and smart web applications using React,
          JavaScript, and Computational Mathematics.
          <br />
          "Explore My Work"
        </b>
        <Link to="/contact us">
          <button>contact us</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
