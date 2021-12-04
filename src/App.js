import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-user">
        <div className="container-navbar-user">
          <img src="" alt="" />

          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>

        <div className="container-times">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>

      <div className="container-tasks">
        <div className="container-navbar-tasks">
          <div className="container-work">
            <div className="navbar-work">
              <p>Work</p>
              <p>...</p>
            </div>
            <h2>32Hras</h2>

            <div className="footer-work">
              <p>Last Week - 36hras</p>
            </div>
          </div>
          <div className="container-play">
            <div className="navbar-play">
              <p>Play</p>
              <p>...</p>
            </div>
            <h2>10Hras</h2>

            <div className="footer-play">
              <p>Last Week - 8hras</p>
            </div>
          </div>
          <div className="container-study">
            <div className="navbar-study">
              <p>Study</p>
              <p>...</p>
            </div>
            <h2>4Hras</h2>

            <div className="footer-study">
              <p>Last Week - 7hras</p>
            </div>
          </div>
        </div>

        <div className="container-footer-tasks">
          <div className="container-excercise">
            <div className="navbar-excercise">
              <p>Excercise</p>
              <p>...</p>
            </div>
            <h2>4Hras</h2>

            <div className="footer-excercise">
              <p>Last Week - 5hras</p>
            </div>
          </div>
          <div className="container-social">
            <div className="navbar-social">
              <p>Social</p>
              <p>...</p>
            </div>
            <h2>5Hras</h2>

            <div className="footer-social">
              <p>Last Week - 10hras</p>
            </div>
          </div>
          <div className="container-self-care">
            <div className="navbar-self-care">
              <p>Self Care</p>
              <p>...</p>
            </div>
            <h2>2Hras</h2>

            <div className="footer-self-care">
              <p>Last Week - 2hras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
