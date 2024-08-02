// /** @jsxImportSource preact */
// import { Router } from 'preact-router';
// import Navbar from './components/Navbar';
// import SearchBar from './components/SearchBar';
// import ExpenseTracker from './components/ExpenseTracker';
// import CurrencyConverter from './components/CurrencyConverter';
// import Calculator from './components/Calculator';
// import CurrencyDetail from './components/CurrencyDetail';
// import './assets/styles/main.css';

// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <div className="container">
//         <SearchBar />
//         <Router>
//           <div path="/">
//             <div className="content">
//               <ExpenseTracker />
//               <CurrencyConverter />
//             </div>
//           </div>
//           <Calculator path="/calculator" />
//           <CurrencyDetail path="/currency/ :code " />
//         </Router>
//       </div>
//     </div>
//   );
// };

// export default App;

/** @jsxImportSource preact */
import { Router } from 'preact-router';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ExpenseTracker from './components/ExpenseTracker';
import CurrencyConverter from './components/CurrencyConverter';
import Calculator from './components/Calculator';
import CurrencyDetail from './components/CurrencyDetail';
import './assets/styles/main.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <SearchBar />
        <Router>
          <div path="/" default>
            <div className="content">
              <ExpenseTracker />
              <CurrencyConverter />
            </div>
          </div>
          <Calculator path="/calculator" />
          <CurrencyDetail path="/currency/:code" />
        </Router>
      </div>
    </div>
  );
};

export default App;