import Quote from "../models/Quote"

const quotes: Quote[] = require('../quotes.json');

function getRandomQuote() : Quote {
    var randomIndex: number = getRandomIndex(0, quotes.length)
    return quotes[randomIndex]
}

function getRandomIndex(min: number, max: number) : number{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export { getRandomQuote }

