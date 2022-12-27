import React, { useState } from "react";
import Home from "./components/pages/home";
function App() {

  const [page, setPage] = useState("home")

  return (
    <div>
      {page === "home" && <Home />}
    </div>
  );
}

export default App;
