<script lang="ts" setup>
import { useAccount } from 'use-wagmi';

useHead({
  title: 'PINK PASS',
});

const { address, isConnected } = useAccount();
const metadata = ref<Metadata | null>(null);
const txHash = ref<string | undefined>();

watch(
  () => address.value,
  walletAddress => {
    if (!walletAddress) {
      metadata.value = null;
    }
  }
);

function onClaim(m: Metadata, hash?: string) {
  metadata.value = m;
  txHash.value = hash;
}
</script>

<template>
  <div>
    <div class="text-center m-10 mb-4">
      <NuxtIcon name="pink-logo" class="inline-flex icon-auto mx-auto" filled />
    </div>

    <FormShare v-if="metadata" :metadata="metadata" :tx-hash="txHash" />
    <div v-else class="max-w-md w-full md:px-6 mx-auto pb-8">
      <NftCountdown
        :start="($config.public.CLAIM_START + 60) * 1000"
        :end="$config.public.CLAIM_END * 1000"
      />
      <Gavin />
      <ConnectWallet v-if="!isConnected" size="large" />
      <FormClaim v-else @claim="onClaim" />

      <p class="text-center my-8">
        Thrilled to welcome you to our ever-expanding Pink gaming universe! This NFTgives access to
        PINK games and can be used to earn PINK Points. How PINK Pass evolves is up to the Pink
        community to define. The MINT window for the PINK pass NFT concludes on the 16th of
        February.
      </p>
    </div>
  </div>
</template>
