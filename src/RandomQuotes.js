import './Styles.css';
import { useState, useEffect } from "react";


export default function RandomQuotes() {

    const [quote, setQuote] = useState([]);

    useEffect(()=>{
       handleQuote();
    },[]);

    const handleQuote=()=>{

        fetch("https://dummyjson.com/quotes")
        .then(response => response.json())
        .then(data => setQuote(data.quotes[Math.floor(Math.random()* data.limit)]));
        
    }  

    return(
        <>
        <div id="page">
            <div id="quote-box">
                <h2 id="text">{quote.quote}</h2>
                <h4  id="author">- {quote.author}</h4>
                <div id="buttons">
                    <button id="new-quote" onClick={handleQuote}>new quote</button>
                    <a  id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" ><button>Tweet</button></a>
                </div>
            </div>
        </div>
        </>
    );
}

//https://type.fit/api/quotes

//https://dummyjson.com/quotes
