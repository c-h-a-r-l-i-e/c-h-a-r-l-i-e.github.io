import './App.css';
import React, { useEffect, useState } from 'react';

class PlainText extends React.Component {
  render() {
    return (
        <div className="App-container">
          <div className="App-center">
            {this.props.content}
          </div>
        </div>
    );
  }
}

function Title() {
  const leadText = "Hi! I'm Charlie Maclean. I like "
  const likeList = ["programming.", "robotics.", "AI.", "web design.", "tech for good.", "Android development."]
  const [content, setContent] = useState("");
  const [likeIdx, setLikeIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() =>{
    let interval = setInterval(() =>{
      if (reverse) {
        if (charIdx <= leadText.length) {
          setReverse(false);
          setLikeIdx((likeIdx + 1) % likeList.length);
          setCharIdx(charIdx + 1);
          setContent((leadText + likeList[likeIdx]).substring(0, charIdx));
        } else {
          setCharIdx(charIdx - 1);
          setContent((leadText + likeList[likeIdx]).substring(0, charIdx));
        }

      } else {
        if (charIdx >= (leadText + likeList[likeIdx]).length + 20) {
          setReverse(true);
        } else {
          setCharIdx(charIdx + 1);
          setContent((leadText + likeList[likeIdx]).substring(0, charIdx));
        }
      }


    }, 100)
    return ()=> {
      clearInterval(interval);
    };
  });
  return (
      <h1 className="App-typed"> {content} <span className="App-wrap"> </span></h1>
  )
}

function Introudction() {
  const introduction = <p><p> Hi! I am a computer science master's graduate from the University of Cambridge. 
            I'm interested in robotics, AI, web design and tech for good. My master's
            project looked how we can better define safety for autonomous driving with reinforcement
            learning. </p> 
            <p>This website is a work in progress (helping me to learn <code>React</code>).</p></p>;

  return (
    <PlainText content={introduction}></PlainText>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>

        <Introudction></Introudction>

      </header>
    </div>
  );
}

export default App;
