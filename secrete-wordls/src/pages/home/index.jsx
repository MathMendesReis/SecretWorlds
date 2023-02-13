import React from "react";
import { goGame } from "../../router/navegation";
import { Body, ButtonStart, Title } from "./styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContex";

const Home = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { randoWord, randonCategory } = context;

  return (
    <Body>
      <Title>Palavras Secretas</Title>
      <ButtonStart
        onClick={() => {
          goGame(navigate);
          randonCategory();
          randoWord();
        }}
      >
        começar partida
      </ButtonStart>
    </Body>
  );
};

export default Home;
