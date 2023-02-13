import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EndGame from "../pages/endGame";
import Game from "../pages/game";
import Home from "../pages/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/game/" element={<Game />} />
        <Route path="/endGame/" element={<EndGame />} />
      </Routes>
    </BrowserRouter>
  );
};
