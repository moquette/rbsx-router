import "./styles.scss";
export const Footer = (props) => {
  return (
    <footer className="footer text-muted text-center">
      <p className="small">
        Edit <code>src/App.js</code> and save to reload
        <br />
        React &bull; Bootstrap &bull; SASS &bull; Xtras
        <br />
        Development Simplicity
        <br />
        &copy;{new Date().getFullYear()} React BSX
      </p>
    </footer>
  );
};
