<script setup lang="ts">
import AppLoader from './AppLoader.vue';

defineProps<{ data: any | null; error: Error | null; loading: boolean }>();
</script>

<template>
  <AppLoader v-if="loading" />
  <section v-else class="overflow-x-auto m-8 w-max rounded-md">
    <slot v-if="!error && data"></slot>
    <div v-else class="error-message bg-red-500 text-white p-4 mt-4">{{ error }}</div>
  </section>
</template>
