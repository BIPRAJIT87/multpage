/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { route } from 'preact-router';
import currencies from './currencies';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const results = currencies.filter((currency) =>
        currency.name.toLowerCase().includes(value.toLowerCase()) ||
        currency.code.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCurrencies(results);
    } else {
      setFilteredCurrencies([]);
    }
  };

  const handleCurrencyClick = (currencyCode) => {
    route(`/currency/${currencyCode}`);
  };

  return (
    <div className="search-bar">
      <TextField
        value={query}
        onChange={handleSearch}
        placeholder="Search for a currency"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
      {filteredCurrencies.length > 0 && (
        <List className="search-results">
          {filteredCurrencies.map((currency) => (
            <ListItem key={currency.code} onClick={() => handleCurrencyClick(currency.code)}>
              <ListItemText primary={`${currency.name} (${currency.code})`} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;