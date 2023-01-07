import styled from "styled-components";

export const StyledDiv = styled.div`
    background: linear-gradient(blue 0%, black 100%);
    height: 100vh;
    color: white;
    display: flex;
    flex-direction:column;
    align-items:  center;
    justify-content: space-evenly;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 1em;
`
export const StyledDivGame = styled(StyledInfo)`
`
export const StyledTxt = styled.p`
    font-size: 3em;
`

export const H1 = styled.h1`
 font-size: 6em;
`
export const DicaTxt = styled.h3`
 font-size: 2em;
`
export const AdvLatter = styled.p`
    font-size: 2em;
`

export const Input = styled.input`
    height: 12vh;
    width: 6vw;
    font-size: 1.5em;
    text-align:center;
    font-family: helvetica;
`

export const ButtonStyled = styled.button`
    height: 6vh;
    width: 9vw;
    border-radius:2em;
    font-size: 1.5em;
    cursor: pointer;
    font-family: Helvetica;
`
export const SpanTent = styled(AdvLatter)`
    font-size: 1.5em;
    color: yellow;

`

export const ContainerLetter = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;

`

export const TxtCategory = styled.span`
    margin-left: 0.3em;
    text-transform: uppercase;
    color: yellow;

`
