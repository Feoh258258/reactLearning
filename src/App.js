import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sometext
        </a>

        <div id="like_button_container"></div>
      </header>
      <main>
        <header>
           <article>
              <h1>Article 1</h1>
              <h2>Article 2</h2>
            </article> 
          </header>
          <p>In Orci Pellentesque Facilisis Malesuada Risus in? Diam facilisis! Ut Massa In Sed Varius Id Sit mi. Leo Enim Tempor Sapien arcu; Faucibus Mollis Sagittis Metus Eget Nulla ut? Iaculis tempor?
Read more: https://www.plerdy.com/ua/blog/15-lorem-ipsum/</p>
          <p>A Urna Vel A Risus Volutpat lorem! Aenean nibh! Sagittis Laoreet Faucibus Imperdiet Bibendum Odio quisque. Praesent Elementum Aliquet Ornare Purus Amet Dapibus sapien; Auctor Odio Fermentum neque, Eu In metus?</p>
      </main>
      <footer>Copyright</footer>


    </div>
  );
}

export default App;
