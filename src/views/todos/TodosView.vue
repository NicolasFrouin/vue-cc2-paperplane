<script setup lang="ts">
import { AppTable } from '@/components';
import { useTodosStore } from '@/stores';
import { onUnmounted } from 'vue';

const { data, error, loading, cancel } = useTodosStore();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <AppTable :data="data" :error="error" :loading="loading" />
</template>
