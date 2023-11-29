import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from "./db/quotes.json";
import {getRandomElement} from './utils/random';
import {getRandomElement1} from './utils/random1';
import { useState } from 'react';

const bgs=["bg1", "bg2", "bg3", "bg4"]
const planets=["planet1", "planet2", "planet3", "planet4"]
function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const index=getRandomElement1(bgs);
  const [currentBg, setCurrentBg] = useState(bgs[index]);
  const [planet, setPlanet] = useState(planets[index]);
  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    const index=getRandomElement1(bgs);
    setCurrentBg(bgs[index]);
    setPlanet(planets[index]);
  };
  
  return (
      <main className={`App ${currentBg}`}>
        <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} planet={planet}/>
      </main>  
  )
}
export default App
