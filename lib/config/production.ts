import type { ConfigInterface } from '~/lib/types/general.types';

const config: ConfigInterface = {
  API_BASE: 'https://api.apillon.io',
  CHAIN_ID: '11155111', // Sepolia (Ethereum testnet)
  CONTRACT_ADDRESS: '0x430DcC95536CD20bF3C54792C0078A341805a778', // Contract address
  CLAIM_START: 1707315321,
  CLAIM_END: 1707316221,
};

export default config;
