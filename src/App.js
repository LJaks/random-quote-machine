import React from "react";
import randomcolor from "randomcolor";
//import { random } from "lodash";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      loading: false,
      color: "",
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quotes: data,
          loading: false,
        });
      });
  }
  //RANDOM COLOR PICKER
  componentDidUpdate(prevProps, prevState) {
    if (prevState.quote !== this.state.quote) {
      const newColor = randomcolor();
      this.setState({ color: newColor });
    }
  }

  render() {
    const loadingText = this.state.loading ? "loading..." : "this.state.quotes.quote";
    return (
      <div className="App" id="quote-box">
        {loadingText}
        <Button
          buttonDisplayName="Next Quote"
          clickHandler={this.nextQuoteClickHandler}/>
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       quotes: [],
//       selectedQuoteIndex: null,
//     };
//     this.selectedQuoteIndex = this.selectedQuoteIndex.bind(this);
//   }

//   componentDidMount() {
//     fetch(
//       "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
//     )
//       .then((data) => data.json())
//       .then((quotes) =>
//         this.setState({ quotes }, () => {
//           this.setState({ selectedQuoteIndex: this.selectedQuoteIndex() });
//         })
//       );
//   }

//   get selectedQuote() {
//     if (
//       !this.state.quotes.length ||
//       !Number.isInteger(this.state.selectedQuoteIndex)
//     ) {
//       return null;
//     }
//     return this.state.quotes[this.state.selectedQuoteIndex];
//   }

//   selectedQuoteIndex() {
//     if (!this.state.quotes.length) {
//       return;
//     }
//     return random(0, this.state.quotes.length - 1);
//   }

//   render() {
//     return (
//       <div className="App" id="quote-box">
//         {this.selectedQuote
//           ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}`
//           : ""}
//         <Button
//           buttonDisplayName="Next Quote"
//           clickHandler={this.nextQuateClickHandler}
//         />
//       </div>
//     );
//   }
// }

export default App;
