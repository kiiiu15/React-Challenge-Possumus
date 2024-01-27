import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Router from "./Config/Router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
