import styled from 'styled-components'
import { ButtonStart } from '../home/styled'

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const ButtonReiniciar = styled(ButtonStart)`
`

export const TxtGameOver = styled.h1`
position: absolute;
top: 170px;
font-size: 14vw;
text-transform: uppercase;
`

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 170px;
`