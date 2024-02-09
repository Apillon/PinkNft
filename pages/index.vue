<script lang="ts" setup>
import { useAccount } from 'use-wagmi';

useHead({
  title: 'PINK PASS',
});

const router = useRouter();
const { isConnected } = useAccount();

function onClaim(m: Metadata, hash?: string) {
  router.push({ name: 'share', query: { ...m, txHash: hash } });
}
</script>

<template>
  <div>
    <div class="text-center m-6 md:m-10 mb-4">
      <NuxtIcon name="pink-logo" class="inline-flex icon-auto mx-auto" filled />
    </div>

    <div class="max-w-md w-full md:px-6 mx-auto pb-8">
      <NftCountdown
        :start="($config.public.CLAIM_START + 60) * 1000"
        :end="$config.public.CLAIM_END * 1000"
      />
      <Gavin />
      <ConnectWallet v-if="!isConnected" size="large" />
      <FormClaim v-else @claim="onClaim" />

      <p class="text-center my-8">
        Thrilled to welcome you to our ever-expanding Pink gaming universe! This NFT gives access to
        PINK games and can be used to earn PINK Points. How PINK Pass evolves is up to the Pink
        community to define. The MINT window for the PINK pass NFT concludes on the 16th of
        February.
      </p>
    </div>
  </div>
</template>
