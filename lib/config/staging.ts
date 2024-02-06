import type { ConfigInterface } from '~/lib/types/general.types';

const config: ConfigInterface = {
  API_BASE: 'https://api-stg.apillon.io',
  CHAIN_ID: '11155111', // Sepolia (Ethereum testnet)
  CONTRACT_ADDRESS: '', // Contract address
  CLAIM_START: 0,
  CLAIM_END: 0,
};

export default config;
