// /** @jsxImportSource preact */
// import { useEffect, useState } from 'preact/hooks';
// import { useParams } from 'preact-router';
// import currencies from './currencies';
// import './CurrencyDetail.css';

// const CurrencyDetail = () => {
//   const { code } = useParams();
//   const [currency, setCurrency] = useState(null);
//   const [economicDetails, setEconomicDetails] = useState(null);

//   useEffect(() => {
//     const foundCurrency = currencies.find((cur) => cur.code === code);
//     setCurrency(foundCurrency);

//     // Fetch economic details for the currency (mocked here)
//     if (foundCurrency) {
//       // Replace this with an actual API call if needed
//       setEconomicDetails({
//         gdp: '2.94 trillion USD',
//         inflation: '3.1%',
//         unemployment: '4.7%',
//         // Add more economic details as needed
//       });
//     }
//   }, [code]);

//   if (!currency) {
//     return <div>Currency not found</div>;
//   }

//   return (
//     <div className="currency-detail">
//       <h2>{currency.name} ({currency.code})</h2>
//       <div className="economic-details">
//         <p><strong>GDP:</strong> {economicDetails?.gdp}</p>
//         <p><strong>Inflation:</strong> {economicDetails?.inflation}</p>
//         <p><strong>Unemployment:</strong> {economicDetails?.unemployment}</p>
//         {/* Add more details as needed */}
//       </div>
//     </div>
//   );
// };

// export default CurrencyDetail;

// /** @jsxImportSource preact */
// import { h, Component } from 'preact';
// import { route } from 'preact-router';
// import './CurrencyDetail.css';

// class CurrencyDetail extends Component {
//   constructor(props) {
//     super(props);
//     // console.log("Props in CurrennctDetail: ", props);
//     this.state = {
//       currencyInfo: null,
//       loading: true,
//       error: null
//     };
//   }

//   componentDidMount() {
//     const { code } = this.props.matches;
//     console.log("Currency code:", code); // Debugging line
//     if (code) {
//       this.fetchCurrencyDetails(code);
//     } else {
//       this.setState({ error: 'No currency code provided', loading: false });
//     }
//   }

//   fetchCurrencyDetails = async (code) => {
//     try {
//       const response = await fetch(`https://api.example.com/currency/${code}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log("Fetched data:", data); // Debugging line
//       this.setState({ currencyInfo: data, loading: false });
//     } catch (error) {
//       this.setState({ error: error.message, loading: false });
//     }
//   };

//   render() {
//     const { currencyInfo, loading, error } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     return (
//       <div className="currency-detail">
//         <h2>{currencyInfo.name}</h2>
//         <p>Code: {currencyInfo.code}</p>
//         <p>Exchange Rate: {currencyInfo.exchangeRate}</p>
//         <p>Country: {currencyInfo.country}</p>
//         <p>Economy: {currencyInfo.economy}</p>
//         {/* Add more details as needed */}
//       </div>
//     );
//   }
// }

// export default CurrencyDetail;

/** @jsxImportSource preact */
import { h, Component } from 'preact';
import { route } from 'preact-router';
import './CurrencyDetail.css';

class CurrencyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyInfo: null,
      countryInfo: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    const { code } = this.props.matches;
    if (code) {
      this.fetchCurrencyDetails(code);
    } else {
      this.setState({ error: 'No currency code provided', loading: false });
    }
  }

  fetchCurrencyDetails = async (code) => {
    try {
      // Fetch country information
      const countryResponse = await fetch(`https://restcountries.com/v3.1/currency/${code}`);
      if (!countryResponse.ok) {
        throw new Error('Failed to fetch country details');
      }
      const countryData = await countryResponse.json();
      const country = countryData[0];
      
      // Fetch currency exchange rates
      const currencyResponse = await fetch(`https://v6.exchangerate-api.com/v6/524ffc670b137685f0879363/latest/${code}`);
      if (!currencyResponse.ok) {
        throw new Error('Failed to fetch currency details');
      }
      const currencyData = await currencyResponse.json();
      
      // Combine data
      this.setState({
        currencyInfo: {
          name: country.currencies[code].name,
          code: code,
          exchangeRate: currencyData.conversion_rates[code],
          country: country.name.common,
          economy: country.region
        },
        loading: false
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { currencyInfo, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="currency-detail">
        <h2>{currencyInfo.name}</h2>
        <p>Code: {currencyInfo.code}</p>
        <p>Exchange Rate: {currencyInfo.exchangeRate}</p>
        <p>Country: {currencyInfo.country}</p>
        <p>Economy: {currencyInfo.economy}</p>
        {/* Add more details as needed */}
      </div>
    );
  }
}

export default CurrencyDetail;