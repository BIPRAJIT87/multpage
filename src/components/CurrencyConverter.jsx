/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import { TextField, Paper, MenuItem, Grid, Button } from '@mui/material';
import currencies from './currencies'; // Adjust the path as necessary
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const handleConversion = () => {
    const mockRate = 0.85; // Example rate from USD to EUR
    setResult(amount * mockRate);
  };

  return (
    <Paper elevation={3} className="card currency-converter">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="From"
            variant="outlined"
            fullWidth
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                {currency.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="To"
            variant="outlined"
            fullWidth
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                {currency.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleConversion}
            className="button"
          >
            Convert
          </Button>
        </Grid>
        {result !== null && (
          <Grid item xs={12}>
            <Paper elevation={3} className="conversion-result">
              {amount} {fromCurrency} is approximately {result} {toCurrency}
            </Paper>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default CurrencyConverter;