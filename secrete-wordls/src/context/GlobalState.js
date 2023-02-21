import React, { useEffect, useState } from 'react'
import { GoEndGame } from '../router/navegation'
import { GlobalContext } from './GlobalContex'



export const GlobalState = ({ children }) => {
    // const navigate = useNavigate()
    const words = {
        carro: ["motor", "porta", "capô"],
        fruta: ["banana", "maça", "pêra"],
        corpo: ["braço", "perna", "cerébro"],
        computador: ["mouse", "teclado", "monitor"],
        programacao: ["linguagem", "framework", "javascript"],
        alimento: ["arroz", "feijão", "carne"]
    }
    const [word, setWord] = useState([])
    const [category, setCategory] = useState()
    const [letter, setLetter] = useState('')
    const [lettersFounds, setLetterFounds] = useState([])
    const [lettersNotFounds, setLetterNotFounds] = useState([])
    const [attempts, setAttempts] = useState(3)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)




    console.log(gameOver)
    const victoryCondition = () => {
        let novaArr = word.filter((letter, i) => word.indexOf(letter) === i);// removendo valores repetidos
        if (novaArr.length === lettersFounds.length) {
            randonCategory()
            setScore(score + 10)
        }

    }

    const loseCondition = (navigate) => {
        const verifiedFounds = word.find(le => le === letter)
        if (verifiedFounds === undefined) {
            if (attempts > 0) {
                setAttempts(attempts - 1)
            } else {
                GoEndGame(navigate)
                setTimeout(function () {
                    setGameOver(true)
                }, 2000)

            }
        }


    }




    const timeOut = () => {
        // setTimeout(setGameOver(true), 300)
        setTimeout(function () {
            setGameOver(true)
        }, 1500)
        // setGameOver(true)
    }

    const randonCategory = () => {
        const allCategory = Object.keys(words)
        const category = allCategory[Math.floor(Math.random() * Object.keys(allCategory).length)]
        const wordRandom = words[category][Math.floor(Math.random() * 3)]
        const arrayCaracteres = wordRandom.split('')
        setCategory(category)
        setWord(arrayCaracteres)
        setLetterFounds([])
        setLetterNotFounds([])
        setAttempts(3)
    }




    const verifiedLyrics = (navigate) => {
        const verified = word.find(le => le === letter)
        if (!verified) {
            //palavra errada
            const copyLetterNotFounds = [...lettersNotFounds]
            const verifiedNotFounds = copyLetterNotFounds.find(le => le === letter)
            if (!verifiedNotFounds) {
                copyLetterNotFounds.push(letter)
                setLetterNotFounds(copyLetterNotFounds)
                setLetter("");
            }


        } else {
            //Palavra certa
            const copyLetterFounds = [...lettersFounds]
            const verifiedFounds = copyLetterFounds.find(le => le === letter)
            if (!verifiedFounds) {
                copyLetterFounds.push(letter)
                setLetterFounds(copyLetterFounds)
                setLetter("");

            }
        }


    }

    useEffect(() => {

    }, [lettersNotFounds])

    const data = {
        randonCategory,
        word,
        category,
        letter,
        setLetter,
        verifiedLyrics,
        lettersFounds,
        attempts,
        lettersNotFounds,
        victoryCondition,
        score,
        setScore,
        gameOver,
        timeOut,
        setLetterFounds,
        setGameOver,
        loseCondition
    }
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
}
