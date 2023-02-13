import React from "react";
import { GlobalState } from "./context/GlobalState";
import { GlobalStyled } from "./globalStyled/GlobalStyled";
import { Router } from "./router/Router";
function App() {



  return (
    <div>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>

    </div>
  );
}

export default App;
