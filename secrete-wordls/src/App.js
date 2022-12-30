import React, { useState } from "react";
import { GlobalStyled } from "./components/globalStyled";
import End from "./components/pages/end";
import Game from "./components/pages/game";
import Home from "./components/pages/home";
import wordList from "./components/words/index"
function App() {
  const [page, setPage] = useState("home")
  const [word, setWord] = useState("")
  const [category, setCategory] = useState("")
  const [letter, setLetter] = useState("")
  const [gameLetter, setGameLetter] = useState("")
  const [tentativas, setTentativas] = useState(3)
  const [pontuacao, setPontuacao] = useState(0)
  const [letrasErradas, setLetrasErradas] = useState([])
  const [letrasCertas, setLetrasCertas] = useState([])

  console.log(letter)

  const tratamentoWordList = () => {
    return console.log(typeof word)
  }


  const categoryRandon = () => {
    const category = Object.keys(wordList)[Math.floor(Math.random() * Object.keys(Object.keys(wordList)).length)];
    const palavra = wordList[category][Math.floor(Math.random() * wordList[category].length)];
    return [setCategory(category), setWord(palavra), setLetter(palavra.split(""))]
  }

  const endGame = () => {
    if (tentativas === 0) {
      setPage("end")
    } else {

    }


  }


  return (
    <div>
      <GlobalStyled />
      {page === "home" && <Home
        setPage={setPage}
        wordList={wordList}
        setWord={setWord}
        setLetter={setLetter}
        category={category}
        setCategory={setCategory}
        categoryRandon={categoryRandon}
        tratamentoWordList={tratamentoWordList}
      />}
      {page === "game" && <Game
        setPage={setPage}
        letter={letter}
        word={word}
        gameLetter={gameLetter}
        setGameLetter={setGameLetter}
        tentativas={tentativas}
        setTentativas={setTentativas}
        category={category}
        pontuacao={pontuacao}
        setPontuacao={setPontuacao}
        endGame={endGame}
        letrasErradas={letrasErradas}
        setLetrasErradas={setLetrasErradas}
        letrasCertas={letrasCertas}
        setLetrasCertas={setLetrasCertas}
      />}
      {page === "end" && <End
        categoryRandon={categoryRandon}
        setPage={setPage}
        setTentativas={setTentativas}
        setLetrasErradas={setLetrasErradas}
        setLetrasCertas={setLetrasCertas}
      />}
    </div>
  );
}

export default App;
