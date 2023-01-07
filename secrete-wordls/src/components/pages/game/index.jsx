import React, { useEffect, useRef } from "react";
import { AdvLatter, ButtonStyled, ContainerLetter, DicaTxt, H1, Input, SpanTent, StyledDiv, StyledDivGame, StyledInfo, StyledTxt, TxtCategory } from "./styled";

const Game = ({ letter, setGameLetter, gameLetter, tentativas, setTentativas, category, pontuacao, setPontuacao, endGame, setLetrasErradas, letrasErradas, letrasCertas, setLetrasCertas, verificarLetra, categoryRandon }) => {
    const letterInputRef = useRef(null)

    // console.log(letter)
    const parseLetter = () => {
        const setLetter = new Set(letter)
        const newArray = [...setLetter]
        return newArray;
    }

    useEffect(() => {
        const setLetter = parseLetter()
        if (setLetter.length === letrasCertas.length) {
            categoryRandon()
            setTentativas(3)
            setLetrasCertas([])
            setLetrasErradas([])
        }
    }, [letrasCertas])

    return (
        <StyledDiv>
            <StyledInfo>
                <StyledTxt>Pontuação: {pontuacao}</StyledTxt>
                <H1>Adivinhe a palavra</H1>
                <DicaTxt>Dica sobre a palavra:<TxtCategory>{category}</TxtCategory></DicaTxt>
            </StyledInfo>
            {/* <div>
                <p>Letras erradas : {letrasErradas}</p>
            </div> */}
            <StyledDivGame>
                <form>
                    {letter.map((letra, index) =>
                        letrasCertas.includes(letra) ? (
                            <Input key={index} type="text" name="letter" maxLength="0" defaultValue={letra} />
                        )
                            :
                            (<Input key={index} type="text" name="letter" maxLength="0" defaultValue={""} />)
                    )}
                </form>
                <SpanTent>Você ainda tem {tentativas} tentativas.</SpanTent>
                <AdvLatter>Tente adivinhar uma letra da palavra:</AdvLatter>
                <ContainerLetter>
                    <Input type="text"
                        value={gameLetter}
                        name="letter"
                        maxLength="1"
                        ref={letterInputRef}
                        onChange={(e) => { setGameLetter(e.target.value) }} />
                    <ButtonStyled onClick={() => {
                        verificarLetra(gameLetter)
                        letterInputRef.current.focus()
                        setGameLetter("")
                    }}>jogar</ButtonStyled>
                </ContainerLetter>
            </StyledDivGame>

        </StyledDiv>
    )
}

export default Game;
