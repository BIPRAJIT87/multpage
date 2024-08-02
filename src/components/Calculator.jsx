// /** @jsxImportSource preact */
// import { useState } from 'preact/hooks';
// import { Paper, TextField, Button, Grid } from '@mui/material';
// import './Calculator.css';

// const Calculator = () => {
//   const [display, setDisplay] = useState('');

//   const handleButtonClick = (value) => {
//     if (value === '=') {
//       try {
//         setDisplay(eval(display).toString());
//       } catch {
//         setDisplay('Error');
//       }
//     } else if (value === 'C') {
//       setDisplay('');
//     } else {
//       setDisplay(display + value);
//     }
//   };

//   return (
//     <Paper elevation={3} className="calculator">
//       <TextField
//         variant="outlined"
//         fullWidth
//         value={display}
//         InputProps={{ readOnly: true }}
//         className="calculator-display"
//       />
//       <Grid container spacing={1} className="calculator-buttons">
//         {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
//           <Grid item xs={3} key={value}>
//             <Button
//               variant="contained"
//               fullWidth
//               onClick={() => handleButtonClick(value)}
//               className="calculator-button"
//             >
//               {value}
//             </Button>
//           </Grid>
//         ))}
//       </Grid>
//     </Paper>
//   );
// };

// export default Calculator;

/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('*(1/100)')}>%</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('00')}>00</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;