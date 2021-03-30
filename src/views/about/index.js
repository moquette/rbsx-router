import logo from "../../logo.svg";
import "./styles.scss";

export const About = (props) => {
  return (
    <main className="main text-center">
      <img src={logo} className="w-25 m-5" alt="logo" />
      <h1 className="display-1 fw-lighter">About</h1>
    </main>
  );
};
