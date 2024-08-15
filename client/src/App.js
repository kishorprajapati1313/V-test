import Approuter from "./Approuter";
import HomeFooter from "./Component/HomeComponents/HomeFooter";
import HomeNavbar from "./Component/HomeComponents/HomeNavbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <HomeNavbar />

        <Approuter />
        <HomeFooter />

      </Router>

    </>
  );
}

export default App;
