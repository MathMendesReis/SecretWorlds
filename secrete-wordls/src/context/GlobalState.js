import React, { useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContex'


export const GlobalState = ({ children }) => {
    const words = {
        carro: ["motor", "porta", "capô"],
        fruta: ["banana", "maça", "pêra"],
        corpo: ["braço", "perna", "cerébro"],
        computador: ["mouse", "teclado", "monitor"],
        programacao: ["linguagem", "framework", "javascript"],
        alimento: ["arroz", "feijão", "carne"]
    }
    const [word, setWord] = useState(['a', 'b'])
    const [category, setCategory] = useState('teste')
    const [letter, setLetter] = useState([])
    const [lettersFounds, setLetterFounds] = useState([])
    const [lettersNotFounds, setLetterNotFounds] = useState([])
    const [attempts, setAttempts] = useState(3)





    const losingCondition = (navigate) => {
        navigate("/endGame/")
    }

    const randonCategory = () => {
        const allCategory = Object.keys(words)
        const category = allCategory[Math.floor(Math.random() * Object.keys(allCategory).length)]
        const wordRandom = words[category][Math.floor(Math.random() * 3)]
        const arrayCaracteres = wordRandom.split('')
        setCategory(category)
        setWord(arrayCaracteres)
    }

    const verifiedLyrics = (str) => {
        console.log(str)
        if (word.find(letter => letter === str) && str !== '') {
            const arrayAux = [...lettersFounds]
            arrayAux.push(str)
            setLetterFounds(arrayAux)

        } else {
            if (str !== '') {
                const arrayAux = [...lettersNotFounds]
                arrayAux.push(str)
                setLetterNotFounds(arrayAux)
                setAttempts(attempts - 1)

            }

        }
    }

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
        losingCondition
    }
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
}
