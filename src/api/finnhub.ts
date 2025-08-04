import axios from 'axios';

const token = import.meta.env.VITE_FINNHUB_API_KEY;

const finnhub = async () => {
    const response = await axios.get('https://finnhub.io/api/v1/quote', {
        params: {symbol: 'AAPL', token},
    });
    console.log(response.data);
};

finnhub();
