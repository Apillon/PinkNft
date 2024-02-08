import type { ConfigInterface } from '~/lib/types/general.types';

const config: ConfigInterface = {
  API_BASE: 'https://api.apillon.io',
  CHAIN_ID: '11155111', // Sepolia (Ethereum testnet)
  CONTRACT_ADDRESS: '0xeb8E36580C60f03530A891e2ae7C5c34D26C45e4', // Contract address
  CLAIM_START: 1707422564,
  CLAIM_END: 1707429764,
};

export default config;
