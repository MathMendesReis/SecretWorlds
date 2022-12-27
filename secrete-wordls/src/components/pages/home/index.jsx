import React from "react";
import { StyledButton, StyledDiv, StyledH1, StyledP } from "./styled";

const Home = () => {
    return (
        <StyledDiv>
            <StyledH1>PALAVRAS SECRETAS</StyledH1>
            <StyledP>Clique no botão abaixo para começar a jogar</StyledP>
            <StyledButton>COMEÇAR O JOGO</StyledButton>
        </StyledDiv>
    )
}

export default Home;
