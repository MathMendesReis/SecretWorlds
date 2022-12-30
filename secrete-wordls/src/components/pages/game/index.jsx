import React, { useRef } from "react";
import { AdvLatter, ButtonStyled, ContainerLetter, DicaTxt, H1, Input, SpanTent, StyledDiv, StyledDivGame, StyledInfo, StyledTxt } from "./styled";

const Game = ({ letter, setGameLetter, gameLetter, tentativas, setTentativas, category, pontuacao, setPontuacao, endGame, setLetrasErradas, letrasErradas, letrasCertas, setLetrasCertas }) => {
    const letterInputRef = useRef(null)
    endGame()

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
    return (
        <StyledDiv>
            <StyledInfo>
                <StyledTxt>Pontuação: {pontuacao}</StyledTxt>
                <H1>Adivinhe a palavra</H1>
                <DicaTxt>Dica sobre a palavra:<span>{category}</span></DicaTxt>
            </StyledInfo>
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
                        ref={letterInputRef} onChange={(e) => { setGameLetter(e.target.value) }} />



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
