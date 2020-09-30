import React, { Component, useEffect, useState } from "react";
import Button from "../button/Button";
import TweetButton from "../button/TweetButton";
import randomcolor from "randomcolor";
import "./quotes.css"

// function QuoteGen(){

//   const [quotesArr, setQuotesArr] = useState([]);
//   const [quoteIndex, setQuoteIndex] = useState(null);

//   function randomQuote() {
//        setQuotesArr( () => {
//          const randNum = Math.floor(Math.random() * (this.state.quotesArr.length));
//         return this.state.quotesArr[randNum]
//        })
//   }

//      function clickHandler() {
//         const genRandQuote = randomQuote();
//         this.setState({
//           quote: genRandQuote.quote,
//           author: genRandQuote.author,
//         });
//       };

//      async function fetchData() {
//       const data = await fetch(
//               "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
//             );
//            data
//             .json()
//             .then(data => setQuotesArr(data))
//             .then(quoteIndex => setQuoteIndex(clickHandler()))
//           }
//           useEffect(() => {
//             fetchData();
//           }, [])

//   return (
//     <div>
//       <h2 id="text" >{quote}</h2>
//       <h5 id="author" >{author}</h5>
//       <br />
//       <Button clickHandler={clickHandler} />
//       <TweetButton />
//     </div>
//   );
// }

class QuoteGen extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      quotesArr: [],
      quoteIndex: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  randomQuote() {
    const randNum = Math.floor(Math.random() * this.state.quotesArr.length);
    return this.state.quotesArr[randNum];
  }

  clickHandler() {
    const genRandQuote = this.randomQuote();
    this.setState({
      quote: genRandQuote.quote,
      author: genRandQuote.author,
    });
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotesArr) =>
        this.setState({ quotesArr }, () => {
          this.setState({ quoteIndex: this.clickHandler() });
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.quote !== this.state.quote) {
      const newColor = randomcolor();
      this.setState({ color: newColor });
    }
  }

  render() {
    const randomColor = this.state.color;
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{color: randomColor}} id="quote-box">
        <h2 id="text">{this.state.quote}</h2>
        <h5 id="author"> - {this.state.author}</h5>
        <br />
        <div className="buttons">
          <Button
            backgroundColor={{backgroundColor: randomColor}}
            buttonDisplayName="Next Quote"
            clickHandler={this.clickHandler}
          />
          <TweetButton backgroundColor={{backgroundColor: randomColor}} tweetDisplayName="t"/>
        </div>
      </div>
    );
  }
}

export default QuoteGen;
