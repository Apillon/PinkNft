import type { ConfigInterface } from '~/lib/types/general.types';

const config: ConfigInterface = {
  API_BASE: 'https://api.apillon.io',
  CHAIN_ID: '1', // Ethereum mainnet
  CONTRACT_ADDRESS: '0x7Ad00803FAB05129a4914C36e064d2954cE12333', // Contract address
  CLAIM_START: 1707490800,
  CLAIM_END: 1708095600,
};

export default config;
