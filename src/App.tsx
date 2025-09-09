import { useState } from "react";
import SectionPhoto from "./components/sectionPhoto/sectionPhoto";
import Home from "./components/home/Home";

const App = () => {
  const [welcome, setWelcome] = useState<boolean>(false);
  return (
    <div className="content">
      {welcome ? (
        <div>
          <SectionPhoto />
        </div>
      ) : (
        <div>
          <Home setWelcome={setWelcome} />
        </div>
      )}
    </div>
  );
};

export default App;
