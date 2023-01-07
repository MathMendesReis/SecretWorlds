import React, { useEffect, useState } from "react";
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
  const [listaDePalavras, setListaDePalavras] = useState(wordList)
  const [letrasSemRepeticoes, setLetrasSemRepeticoes] = useState()


  const verificarLetra = (letra) => {
    const copyLetrasCertas = [...letrasCertas]
    const copyLetrasErradas = [...letrasErradas]
    const verify = letter.find(le => le === letra)
    if (verify) {
      copyLetrasCertas.push(letra)
      setLetrasCertas(copyLetrasCertas)
      setPontuacao(pontuacao + 1)

    } else {
      copyLetrasCertas.push(letra)
      setLetrasErradas(copyLetrasErradas)
      setTentativas(tentativas - 1)
    }
  }
  const categoryRandon = () => {
    const category = Object.keys(listaDePalavras)[Math.floor(Math.random() * Object.keys(Object.keys(listaDePalavras)).length)];
    const palavra = listaDePalavras[category][Math.floor(Math.random() * listaDePalavras[category].length)];
    return [setCategory(category), setWord(palavra), setLetter(palavra.split(""))]
  }

  const condicaoDerrota = () => {
    if (tentativas === 0) {
      setPage("end")
    }
  }

  useEffect(() => {
    condicaoDerrota()
  }, [tentativas])





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
        listaDePalavras={listaDePalavras}
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
        letrasErradas={letrasErradas}
        setLetrasErradas={setLetrasErradas}
        letrasCertas={letrasCertas}
        setLetrasCertas={setLetrasCertas}
        verificarLetra={verificarLetra}
        categoryRandon={categoryRandon}

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
