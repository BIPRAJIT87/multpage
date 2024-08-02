// import { render } from 'preact'
// import { App } from './app.jsx'
// import './index.css'

// render(<App />, document.getElementById('app'))


/** @jsxImportSource preact */
import { render } from 'preact';
import App from './app';
import './assets/styles/main.css';

render(<App />,
  document.getElementById('app')
);