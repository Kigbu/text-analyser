import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronounsData } from './data/pronouns'

const App = () => {
  const [textValue, setTextValue] = useState<string>('')
  const [words, setWords] = useState<number>(0)
  const [charaters, setCharacters] = useState<number>(0)
  const [sentences, setSentences] = useState<number>(0)
  const [paragraph, setParagraph] = useState<number>(0)
  const [pronouns, setPronouces] = useState<number>(0)
  const [readTime, setReadTime] = useState<number>(0)
  const [longWord, setLongWord] = useState<string>('')

  useEffect(() => {
    getWords()
    getCharacters()
    getSentences()
    getParagraph()
    getPronouce()
    getReadTime()
    getLongestWord()
  }, [textValue])

  const getWords = () => {
    textValue && setWords(textValue.trim().split(' ').length)
  }

  const getCharacters = () => {
    textValue && setCharacters(textValue.length)
  }

  const getSentences = () => {
    // .match(/[\w|\)][.?!](\s|$)/g).length
    // textValue && setSentences(textValue.split(/[.!?]/).length)
    textValue && setSentences(textValue.split(/[.!?]+\s/).filter(Boolean).length)
  }

  const getParagraph = () => {
    textValue && setParagraph(textValue.replace(/\n$/gm, '').split(/\n/).length)
  }

  const getPronouce = () => {
    textValue &&
      setPronouces(
        textValue
          .trim()
          .toLowerCase()
          .split(/\W+/) // split by non word characters
          .filter((word) => pronounsData.includes(word)).length
      )
    console.log(
      'pro :>> ',
      textValue
        .trim()
        .toLowerCase()
        .split(/\W+/)
        .filter((word) => pronounsData.includes(word))
    )
  }

  const getReadTime = () => {
    textValue && setReadTime(Math.ceil(textValue.trim().split(/\s+/).length / 225))
  }

  const getLongestWord = () => {
    // Math.max(...textValue.split(" ").map(word => word.length))
    // setLongWord()
    textValue &&
      setLongWord(
        textValue
          .trim()
          .split(/\s+/)
          .sort((a, b) => {
            return b.length - a.length
          })[0]
      )
  }

  const setValue = (event: any) => {
    setTextValue(event.target.value)
  }
  return (
    <div className="main-container">
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <TextArea value={textValue} setValue={setValue} />
          <ResultBox
            words={words}
            charaters={charaters}
            sentences={sentences}
            paragraph={paragraph}
            pronouns={pronouns}
          />
          <BottomResultBox longWord={longWord} readTime={readTime} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
