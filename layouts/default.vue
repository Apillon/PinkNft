<template>
  <n-layout class="relative h-screen" :native-scrollbar="false">
    <div ref="headerRef">
      <Header />
    </div>
    <div class="container h-full flex flex-col justify-center" :style="containerStyle">
      <slot />
    </div>
    <div ref="footerRef">
      <Footer />
    </div>
  </n-layout>
</template>

<script lang="ts" setup>
/** Heading height */
const headerRef = ref<HTMLElement>();
const footerRef = ref<HTMLElement>();

const containerStyle = computed(() => {
  const hHeight = headerRef.value?.clientHeight || 0;
  const fHeight = footerRef.value?.clientHeight || 0;
  return {
    minHeight: `calc(100dvh - ${hHeight + fHeight}px)`,
  };
});
</script>
