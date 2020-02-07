import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './Header/Header';
import { NavbarComponent } from './Navbar';
import { ArticleComponent } from './Article';
import {SidebarComponent} from './Sidebar'

function App() {
  return (
    /*<div className="App">
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
          Learn React
        </a>
      </header>
    </div>*/
    <>
      <HeaderComponent />
      <NavbarComponent />
      {['1', '2', '3'].map(article => <ArticleComponent img="data:image/png;base64,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" title={article} />)}
      <SidebarComponent />
    </>
  );
}

export default App;
