import "./App.css";

function App() {
    const count = 0;

  return (
    <>
      <div className="container">
        <div className="container">
          <div>
            <button onClick={()=> count +1}>👍</button>
            <div className="counter">{count}</div>
          </div>
          <div>
            <button>👎</button>
            <div className="counter">0</div>
          </div>
          <div>
            <button>💚</button>
            <div className="counter">0</div>
          </div>
          <div>
            <button>💩</button>
            <div className="counter">0</div>
          </div>
          <div>
            <button>🤣</button>
            <div className="counter">0</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
