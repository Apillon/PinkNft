<script lang="ts" setup>
import { prepareOG } from '~/lib/utils/helpers';
import { Environments } from '~/lib/values/general.values';

useHead({
  title: 'PINK PASS',
});

const router = useRouter();
const { query, fullPath } = useRoute();
const config = useRuntimeConfig();

useSeoMeta(
  prepareOG(
    `Just minted my ${query.name} NFT on https://nft.dotispink.xyz!`,
    `🚀 $PINK @pinkonomic #NFTs`,
    `${query.image}`
  )
);

onBeforeMount(() => {
  if (!query.name || !query.image) {
    router.push('/');
  }
});

const metadata = ref<Metadata | null>({
  name: `${query?.name}`,
  description: `${query?.description}`,
  image: `${query?.image}`,
});
const txHash = ref<string | undefined>(`${query?.txHash}`);

const scanUrl =
  config.public.ENV === Environments.prod
    ? 'https://etherscan.io/tx/'
    : 'https://sepolia.etherscan.io/tx/';
</script>

<template>
  <div v-if="metadata" class="max-w-md w-full md:px-6 my-12 mx-auto">
    <div class="my-8 text-center">
      <h3 class="mb-6">Just minted my #{{ metadata.name }} NFT on nft.dotispink.xyz!</h3>
      <p>🚀 $PINK @pinkonomic #NFTs</p>
    </div>

    <div class="rounded-lg overflow-hidden mb-8">
      <img :src="metadata.image" class="" width="400" height="400" alt="nft" />

      <div class="p-6 bg-bg-lighter">
        <h5>{{ metadata.name }}</h5>
      </div>
      <div class="mt-4 text-center">
        <p class="mb-4">{{ metadata.description }}</p>
        <a
          v-if="query?.txHash && txHash"
          :href="`${scanUrl}${txHash}`"
          class="text-yellow hover:underline"
          target="_blank"
        >
          Transaction: {{ shortHash(txHash) }}
        </a>
      </div>
    </div>

    <Btn
      type="secondary"
      size="large"
      :href="`https://twitter.com/intent/tweet?text=Just minted my ${metadata.name} NFT on nft.dotispink.xyz!&url=https://nft.dotispink.xyz/`"
    >
      <span class="inline-flex gap-2 items-center">
        <NuxtIcon name="x" class="text-xl" />
        <span>Share on X</span>
      </span>
    </Btn>
    <a
      class="twitter-share-button hidden"
      target="”_blank”"
      :href="`https://twitter.com/intent/tweet?url=https://nft.dotispink.xyz${fullPath}`"
    >
      Twitter
    </a>
  </div>
</template>
