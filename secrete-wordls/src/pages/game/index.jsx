import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContex";
import {
  ButtonGame,
  CardLetter,
  ContainerForm,
  ContainerWord,
  DivContainer,
  InputLetter,
} from "./styled";

const Game = () => {
  const context = useContext(GlobalContext);
  const {
    word,
    lettersFounds,
    category,
    verifiedLyrics,
    letter,
    attempts,
    lettersNotFounds,
    score,
    setLetter,
    victoryCondition,
    randonCategory,
    loseCondition,
  } = context;
  const navigate = useNavigate();
  useEffect(() => {
    victoryCondition(navigate);
  }, [letter]);

  useEffect(() => {}, [lettersNotFounds]);

  const letterInputRef = useRef();
  return (
    <DivContainer>
      <h3>pontuação: {score}</h3>
      {attempts > 0 ? (
        <h3>você ainda tem {attempts} chances</h3>
      ) : (
        <h3>você não pode mais errar.</h3>
      )}
      <h3>dica...{category}</h3>
      <ContainerWord>
        {word.map((letter, index) =>
          lettersFounds.includes(letter) ? (
            <CardLetter key={index}>{letter}</CardLetter>
          ) : (
            <CardLetter key={index}></CardLetter>
          )
        )}
      </ContainerWord>
      <p>
        Letras erradas:
        {lettersNotFounds.map((letter, index) => (
          <span key={index}> {letter} </span>
        ))}
      </p>
      <ContainerForm>
        <form>
          <label>Digite uma letra</label>
          <InputLetter
            ref={letterInputRef}
            type="text"
            maxLength="1"
            onChange={(e) => {
              setLetter(e.target.value);
            }}
          />
        </form>
        <ButtonGame
          onClick={() => {
            verifiedLyrics(navigate);
            loseCondition(navigate);
            // randonCategory();
            letterInputRef.current.focus();
          }}
        >
          jogar
        </ButtonGame>
      </ContainerForm>
    </DivContainer>
  );
};

export default Game;
