import {
  useAccount,
  useNetwork,
  usePublicClient,
  useSwitchNetwork,
  useWalletClient,
} from 'use-wagmi';
import { getContract } from 'viem';
import { mainnet, sepolia } from 'use-wagmi/chains';
import { abi } from '~/lib/config/abi';
import { Environments } from '~/lib/values/general.values';

export default function useContract() {
  const message = useMessage();
  const config = useRuntimeConfig();
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { switchNetwork } = useSwitchNetwork();
  const publicClient = usePublicClient();
  const { data: walletClient, refetch } = useWalletClient();

  const contractAddress = config.public.CONTRACT_ADDRESS as `0x${string}`;
  const usedChain = config.public.ENV === Environments.prod ? mainnet : sepolia;

  const contract = ref();

  async function isWalletUsed() {
    return (await contract.value.read.walletUsed([address.value])) as boolean;
  }

  async function getBalance() {
    return (await contract.value.read.balanceOf([address.value])) as bigint;
  }

  async function getTokenOfOwner(index: number) {
    return (await contract.value.read.tokenOfOwnerByIndex([address.value, index])) as number;
  }

  async function getDropStart() {
    const start = (await contract.value.read.dropStart()) as string;
    return Number(start) * 1000;
  }
  async function getDropEnd() {
    const end = (await contract.value.read.dropEnd()) as string;
    return Number(end) * 1000;
  }

  async function getTokenUri(id: number) {
    return (await contract.value.read.tokenURI([id])) as string;
  }

  async function mint() {
    const gas = await publicClient.value.estimateContractGas({
      address: contractAddress,
      abi,
      functionName: 'mint',
      account: address.value,
    });
    const gasLimit = (gas * 110n) / 100n;

    return await contract.value.write.mint([], {}, { gasLimit });
  }

  /**
   * Helper for initializing specific contract
   */
  async function initContract() {
    if (!walletClient.value) {
      await refetch();
      await sleep(200);
    }
    if (!chain || !chain.value || chain?.value.id !== usedChain.id) {
      switchNetwork(usedChain.id);
    }

    if (!contractAddress) {
      message.warning('Please provide contract address in config!');
    } else {
      contract.value = getContract({
        address: contractAddress,
        abi,
        walletClient: walletClient.value || undefined,
        publicClient: publicClient.value,
      });
    }
  }

  function contractError(e: any) {
    console.error('Use contracts error', e.code, e);

    // ignore user declined
    if (e?.code !== 4001) {
      const errorData =
        e?.reason ||
        e?.data?.message ||
        e?.error?.data?.message ||
        e?.error?.message ||
        e?.message ||
        '';
      let msg = '';

      if (errorData.includes('insufficient funds')) {
        // Insufficient funds
        msg = 'Wallet account does not have enough funds.';
      } else if (errorData.includes('Purchase would exceed max supply')) {
        // Max supply exceeded
        msg = 'Tokens depleted. You have requested too many or there is no more supply.';
      } else if (errorData.includes('Wallet already used')) {
        // Wallet already used
        msg = 'Wallet already used. This token has a limit of mints per wallet.';
      } else if (errorData.includes('Only WL addresses allowed.')) {
        // Wallet not whitelisted
        msg = 'Wallet not on whitelist. Only whitelisted wallet addresses are currently permitted.';
      } else if (errorData.includes('transfer caller is not owner nor approved')) {
        // Wallet not approved to use functionality
        msg = 'Wallet has not been approved to use this functionality.';
      } else if (errorData.includes('Character with these traits already minted')) {
        // Character already minted
        msg = 'A character with selected traits has already been minted.';
      } else if (errorData.includes('valid recovery code')) {
        // Problem with embedded signature
        msg = 'Problem with embedded wallet';
      } else if (
        errorData.includes('user rejected transaction') ||
        errorData.includes('User rejected the request')
      ) {
        // User rejected the transaction
        msg = 'Transaction was rejected.';
      } else {
        // Blockchain communication error
        msg = 'Blockchain error. Please retry or contact support if the issue persists.';
      }

      message.error(msg);
    }
  }

  return {
    contract,

    contractError,
    getBalance,
    getDropEnd,
    getDropStart,
    getTokenOfOwner,
    getTokenUri,
    isWalletUsed,
    initContract,
    mint,
  };
}
