import './App.css';

function App() {
  const introduction = `Hi! I am a computer science master's graduate from the University of Cambridge.
            I'm interested in robotics, AI, web design and tech for good. My master's
            project looked how we can better define safety for autonomous driving with reinforcement
            learning.`


  return (
    <div className="App">
      <header className="App-header">
        <h1>Charlie Maclean</h1>

        <div className="App-container">
          <div className="App-center">
            <p>{introduction}</p>
            <p>This website is a work in progress (helping me to learn <code>React</code>).</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
