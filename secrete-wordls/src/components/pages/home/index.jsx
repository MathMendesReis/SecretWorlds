import React from "react";
import { StyledButton, StyledDiv, StyledH1, StyledP } from "./styled";
const Home = ({ setPage, wordList, setWord, setLetter, setCategory, categoryRandon, tratamentoWordList }) => {

    return (
        <StyledDiv>
            <StyledH1>PALAVRAS SECRETAS</StyledH1>
            <StyledP>Clique no botão abaixo para começar a jogar</StyledP>
            <StyledButton onClick={() => {
                categoryRandon()
                setPage("game")
            }}>COMEÇAR O JOGO</StyledButton>
        </StyledDiv>
    )
}

export default Home;
