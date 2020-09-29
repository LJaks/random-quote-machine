import React, {Component} from "react";
import Button from "../button/Button";
import quotes from "./quoteData";

class QuoteGen extends Component {
    constructor() {
        super();
        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author,
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
    randomQuote() {
        const randNum = Math.floor(Math.random() * quotes.length);
        return quotes[randNum];
    }

    clickHandler = () => {
        const genRandQuote = this.randomQuote();
        this.setState({
            quote: genRandQuote.quote,
            author: genRandQuote.author
        })
    }

    render() {
    return(
    <div>
        {this.state.quote}<br/>
        {this.state.author}<br/>
        <Button clickHandler={this.clickHandler} />
    </div>
    )
    }
}

export default QuoteGen;