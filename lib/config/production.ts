import type { ConfigInterface } from '~/lib/types/general.types';

const config: ConfigInterface = {
  API_BASE: 'https://api.apillon.io',
  CHAIN_ID: '11155111', // Sepolia (Ethereum testnet)
  CONTRACT_ADDRESS: '0x95A64F0d16C2Fb779BD83B3F8Fb72ae1c08da877', // Contract address
  CLAIM_START: 1707221128,
  CLAIM_END: 1707379528,
};

export default config;
