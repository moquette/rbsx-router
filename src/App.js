import "bootstrap/dist/js/bootstrap.esm.min.js";
import { BrowserRouter as AppRouter } from "react-router-dom";
import { Routes } from "./routes"; // where we are going to specify our routes
import "./App.scss";

function App() {
  return (
    <AppRouter>
      <Routes />
    </AppRouter>
  );
}

export default App;
