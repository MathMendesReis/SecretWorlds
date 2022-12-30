import React from "react";
import { Buton, StyledDiv, Text } from "./styled";

const End = ({ categoryRandon, setPage, setTentativas, setLetrasCertas, setLetrasErradas }) => {
    return (
        <StyledDiv>
            <div>
                <Text>Infelizmente você não conseguiu adivinhar a palavra, tente de novo!</Text>
            </div>
            <div>
                <Buton onClick={() => {
                    setTentativas(3)
                    setLetrasCertas([])
                    setLetrasErradas([])
                    setPage("home")
                }}>resetar</Buton>
            </div>
        </StyledDiv >
    )
}

export default End;
