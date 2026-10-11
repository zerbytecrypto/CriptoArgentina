// config.js
export const SUPABASE_URL  = '[tu-proyecto.supabase.co](https://TU-PROYECTO.supabase.co)';
export const SUPABASE_ANON = 'TU-ANON-KEY';

// Precios de referencia ARS (reemplazar por una API real en producción)
export const RATES = { BTC: 118940500, ETH: 4186200, USDT: 1284.75, SOL: 218430 };

export const MARKETS = [
  { symbol: 'BTC/USDT',  base: 'BTC',  price: 118940500 },
  { symbol: 'ETH/USDT',  base: 'ETH',  price: 4186200  },
  { symbol: 'SOL/USDT',  base: 'SOL',  price: 218430   },
];
