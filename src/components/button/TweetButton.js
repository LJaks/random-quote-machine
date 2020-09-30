import React from "react";
import "./button.css"

function TweetButton(props) {
  return (
    <div>
        <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">
          <button style={props.backgroundColor}>{props.tweetDisplayName}</button>
        </a>
    </div>
  );
}

export default TweetButton;
