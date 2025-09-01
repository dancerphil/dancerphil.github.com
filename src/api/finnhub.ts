import {createFactory} from 'axios-interface';

const {createInterface} = createFactory({
    baseURL: 'https://finnhub.io/api/v1',
    onPending: (_, options) => {
        if (options.params) {
            options.params = {...options.params, token};
        }
        return options;
    },
});

const token = import.meta.env.VITE_FINNHUB_API_KEY;

export interface ParamsFinnhubQuote {
    symbol: string;
}

export interface FinnhubQuote {
    c: number;
    d: number;
    dp: number;
    h: number;
    l: number;
    o: number;
    pc: number;
    t: number;
}

export const finnhubQuote = createInterface<ParamsFinnhubQuote, FinnhubQuote>(
    'GET',
    '/quote',
);
// = async () => {
//     const response = await axios.get<any, FinnhubQuote>('https://finnhub.io/api/v1/quote', {
//         params: {symbol: 'AAPL', token},
//     });
//     console.log(response.data);
// };
