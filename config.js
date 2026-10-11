// config.js
export const SUPABASE_URL  = 'https://mwojrvpbfdnbnpmcruzr.supabase.co';
export const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13b2pydnBiZmRuYm5wbWNydXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2NzQ3MTAsImV4cCI6MjEwNzI1MDcxMH0.4iSc-H1vFRzHintc4ySwNH0OrD94iZJv63pg6teB1s8';

// Precios de referencia ARS (reemplazar por una API real en producción)
export const RATES = { BTC: 118940500, ETH: 4186200, USDT: 1284.75, SOL: 218430 };

export const MARKETS = [
  { symbol: 'BTC/USDT',  base: 'BTC',  price: 118940500 },
  { symbol: 'ETH/USDT',  base: 'ETH',  price: 4186200  },
  { symbol: 'SOL/USDT',  base: 'SOL',  price: 218430   },
];
