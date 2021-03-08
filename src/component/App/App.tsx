import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";


/**
 * App component.
 * Child Component- Header Footer and Main Body
 */
const App: React.FC = () => {
  return (
    <div data-testid="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
