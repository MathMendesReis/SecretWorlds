import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContex";
import { Body, ButtonReiniciar, ContainerDiv, TxtGameOver } from "./styled";
import { useNavigate } from "react-router-dom";
import { goGame, goHome } from "../../router/navegation";

const EndGame = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const { score, gameOver, setGameOver } = context;
  return (
    <Body>
      {gameOver === false ? (
        <TxtGameOver>game over</TxtGameOver>
      ) : (
        <ContainerDiv>
          <h2>você fez {score} pontos</h2>
          <ButtonReiniciar
            onClick={() => {
              goHome(navigate);
              setGameOver(false);
              console.log(gameOver);
            }}
          >
            reiniciar game
          </ButtonReiniciar>
        </ContainerDiv>
      )}
    </Body>
  );
};

export default EndGame;
