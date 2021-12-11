import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Routing from "./Router/Routing.js";

export const App = () => {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
