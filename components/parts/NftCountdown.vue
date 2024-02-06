<script lang="ts" setup>
import { Countdown } from 'vue3-flip-countdown';
import colors from '~~/tailwind.colors';
import SuccessSVG from '~/assets/images/success.svg';

const props = defineProps({
  start: { type: Number, default: 0 },
  end: { type: Number, default: 0 },
});

const timestamp = useTimestamp();

const timeToStart = computed(() => props.start - timestamp.value);
const timeToEnd = computed(() => props.end - timestamp.value);
</script>

<template>
  <div class="max-w-md w-full my-6 mx-auto">
    <div v-if="timeToStart > 0" class="mt-8">
      <div class="text-center mb-4 font-bold text-sm">Minting starts in</div>
      <Countdown
        :deadlineISO="new Date(start).toISOString()"
        :flip-animation="false"
        :label-color="colors.white"
        :main-color="colors.white"
      />
    </div>
    <div v-else-if="timeToEnd > 0" class="mt-8">
      <div class="text-center mb-4 font-bold text-sm">Minting closes in:</div>
      <Countdown
        :deadlineISO="new Date(end).toISOString()"
        :flip-animation="false"
        :label-color="colors.white"
        :main-color="colors.white"
      />
    </div>
    <div v-else class="mt-8">
      <div class="text-center mb-4 font-bold text-sm">Minting closed</div>
      <Countdown
        :deadlineISO="new Date(start).toISOString()"
        :flip-animation="false"
        :label-color="colors.white"
        :main-color="colors.white"
      />
    </div>
  </div>
</template>
