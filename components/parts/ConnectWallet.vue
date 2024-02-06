<template>
  <div>
    <span v-if="address" class="mr-4">{{ shortHash(address) }}</span>
    <Btn
      v-if="isConnected"
      v-bind="$attrs"
      :size="size"
      :loading="loading || isLoading"
      borderless
      @click="disconnect()"
    >
      Disconnect
    </Btn>
    <Btn
      v-else
      v-bind="$attrs"
      :size="size"
      :loading="loading || isLoading"
      borderless
      @click="modalWalletVisible = true"
    >
      Connect wallet
    </Btn>
  </div>

  <modal
    :show="modalWalletVisible"
    @close="() => (modalWalletVisible = false)"
    @update:show="modalWalletVisible = false"
  >
    <FormWallet />
  </modal>
</template>

<script lang="ts" setup>
import type { Size } from 'naive-ui/es/button/src/interface';
import { useAccount, useConnect, useDisconnect, useWalletClient } from 'use-wagmi';

defineProps({
  size: { type: String as PropType<Size>, default: 'small' },
});

const { error } = useMessage();
const { handleError } = useErrors();

const { connect, connectors, isLoading } = useConnect();
const { data: walletClient, refetch } = useWalletClient();
const { address, isConnected } = useAccount({ onConnect: loginDelay });
const { disconnect } = useDisconnect();

const loading = ref<boolean>(false);
const modalWalletVisible = ref<boolean>(false);

async function login() {
  loading.value = true;
  try {
    if (!isConnected.value) {
      await connect({ connector: connectors.value[0] });
      modalWalletVisible.value = false;
    } else {
      await refetch();

      if (!walletClient.value) {
        await connect({ connector: connectors.value[0] });

        if (!walletClient.value) {
          error('Could not connect with wallet');
          loading.value = false;
          return;
        }
      }

      modalWalletVisible.value = false;
    }
  } catch (e) {
    handleError(e);
  }
  loading.value = false;
}

function loginDelay() {
  setTimeout(() => login(), 100);
}
</script>
