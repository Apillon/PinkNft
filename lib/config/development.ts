import type { ConfigInterface } from '~/lib/types/general.types';

const config: ConfigInterface = {
  API_BASE: 'http://localhost:3001',
  CHAIN_ID: '11155111', // Sepolia (Ethereum testnet)
  CONTRACT_ADDRESS: '', // Contract address
  CLAIM_START: 1707206728, // Drop start
  CLAIM_END: 1707379528, // Drop end
};

export default config;
