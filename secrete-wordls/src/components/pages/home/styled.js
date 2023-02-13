import styled from "styled-components"

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding-top: 5em;
    height: 100vh;
    background: linear-gradient(blue 0%, black 100%)

`

export const StyledH1 = styled.h1`
    font-size: 10vh;
    font-family: Helvetica;
    color: white;
`
export const StyledP = styled(StyledH1)`
    font-size:3vh;
    margin-top: 4em;

`
export const StyledButton = styled.button`
    border-radius:2em;
    font-size: 1.5em;
    padding: 1em;
    margin-top: 2em;
    cursor: pointer;
    font-family: Helvetica;
    &:hover{
        transition: 180ms;
        background-color:gray;
    }

`
