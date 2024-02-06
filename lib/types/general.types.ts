export interface ConfigInterface {
  API_BASE: string;
  CHAIN_ID: string;
  CONTRACT_ADDRESS: string;
  CLAIM_START: number;
  CLAIM_END: number;
}

declare global {
  /** Response */
  type GeneralResponse<T> = {
    data: T;
    id: string;
    status: number;
  };
  type GeneralItemsResponse<T> = {
    data: {
      items: Array<T>;
      total: number;
    };
    id: string;
    status: number;
  };

  type Metadata = {
    name: string;
    description: string;
    image: string;
  };
}
