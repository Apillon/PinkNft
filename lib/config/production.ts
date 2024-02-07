import type { ConfigInterface } from '~/lib/types/general.types';

const config: ConfigInterface = {
  API_BASE: 'https://api.apillon.io',
  CHAIN_ID: '11155111', // Sepolia (Ethereum testnet)
  CONTRACT_ADDRESS: '0x7D185BDFCA950231237652d8954c8C18BFa930EC', // Contract address
  CLAIM_START: 1707315321,
  CLAIM_END: 1707316221,
};

export default config;
