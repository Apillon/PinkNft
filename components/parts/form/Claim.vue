<script lang="ts" setup>
const emits = defineEmits(['claim']);
const message = useMessage();
const txWait = useTxWait();
const {
  contract,
  initContract,
  contractError,
  getBalance,
  getDropEnd,
  getDropStart,
  getTokenOfOwner,
  getTokenUri,
  isWalletUsed,
  mint,
} = useContract();
const timestamp = useTimestamp();

const loading = ref<boolean>(false);
const loadingPage = ref<boolean>(true);
const walletUsed = ref<boolean>(false);
const dropStart = ref<number>(0);
const dropEnd = ref<number>(0);

const hasStarted = computed<boolean>(() => dropStart.value - timestamp.value < 0);
const hasEnded = computed<boolean>(() => dropEnd.value - timestamp.value < 0);
const disabled = computed<boolean>(() => walletUsed.value || !hasStarted.value || hasEnded.value);

onMounted(async () => {
  initContract();

  dropStart.value = await getDropStart();
  dropEnd.value = await getDropEnd();
  loadingPage.value = false;
});

async function claim() {
  if (!contract.value) {
    console.warn('Please check CONTRACT_ADDRESS config!');
    message.warning('Failed to establish connection to contract.');
    return;
  }
  loading.value = true;

  try {
    walletUsed.value = await isWalletUsed();

    if (walletUsed.value) {
      message.success('You already claimed NFT');
      await getMyNFT();
      return;
    }

    txWait.hash.value = await mint();

    console.debug('Transaction', txWait.hash.value);
    message.info('Your NFT Mint has started');

    await txWait.wait();

    console.debug('Transaction receipt', txWait.hash.value);
    message.success('You successfully claimed NFT');

    // get metadata
    await getMyNFT(txWait.hash.value);
    loading.value = false;
  } catch (e) {
    contractError(e);
    loading.value = false;
  }
}

async function getMyNFT(txHash?: string) {
  const balance = contract.value ? await getBalance() : null;

  if (!contract.value || !balance || balance.toString() === '0') {
    loading.value = false;
    return;
  }

  try {
    const id = await getTokenOfOwner(0);
    const url = await getTokenUri(id);

    const metadata = await fetch(url).then(response => {
      return response.json();
    });

    if (metadata) {
      emits('claim', metadata, txHash);
    } else {
      message.error('Missing metadata');
    }
  } catch (e) {
    console.error(e);
    message.error('Apologies, we were unable to load NFTs metadata.');
  }
  loading.value = false;
}
</script>

<template>
  <div v-if="loadingPage" class="relative h-10">
    <Spinner />
  </div>
  <div v-else class="max-w-md w-full md:px-6 my-8 mx-auto">
    <Btn class="uppercase" size="large" :loading="loading" :disabled="disabled" @click="claim()">
      Claim NFT
    </Btn>
    <Notification v-if="hasEnded" class="mt-2" type="error"> Mint has ended </Notification>
    <Notification v-else-if="!hasStarted" class="mt-2" type="warning">
      Wait for mint to start
    </Notification>
    <Notification v-else-if="walletUsed" class="mt-2" type="warning">
      You already claimed your NFT
    </Notification>
  </div>
</template>
