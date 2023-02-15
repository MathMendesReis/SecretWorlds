import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContex";
import { CardLetter, ContainerWord, DivContainer, InputLetter } from "./styled";

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
  } = context;
  const navigate = useNavigate();
  useEffect(() => {
    victoryCondition(navigate);
  }, [lettersFounds, lettersNotFounds]);

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
      <button
        onClick={() => {
          verifiedLyrics(navigate);
          // randonCategory();
          letterInputRef.current.focus();
        }}
      >
        jogar
      </button>
    </DivContainer>
  );
};

export default Game;
