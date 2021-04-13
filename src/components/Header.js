import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Tasting Notes",
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
