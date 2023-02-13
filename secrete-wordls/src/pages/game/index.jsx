import React, { useContext } from "react";
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
    losingCondition,
  } = context;
  return (
    <DivContainer>
      <h3>pontuação</h3>
      <h3>você ainda tem {attempts} chances</h3>
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
          <span key={index}> {letter.toLowerCase()} </span>
        ))}
      </p>
      <form>
        <label htmlFor={letter}>Digite uma letra</label>
        <InputLetter
          type="text"
          maxLength="1"
          onChange={(e) => {
            verifiedLyrics(e.target.value);
          }}
        />
      </form>
    </DivContainer>
  );
};

export default Game;
