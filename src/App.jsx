import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="">
      <div>
        <Navbar />
        <Hero />
      </div>

      {/* stars */}
      {/* <div className="relative z-0">
          <Contact />
        </div> */}
    </div>
    </BrowserRouter> 
  );
};
