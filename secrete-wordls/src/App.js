import React, { useState } from "react";
import { GlobalStyled } from "./components/globalStyled";
import Home from "./components/pages/home";
function App() {

  const [page, setPage] = useState("home")

  return (
    <div>
      <GlobalStyled />
      {page === "home" && <Home />}
    </div>
  );
}

export default App;
