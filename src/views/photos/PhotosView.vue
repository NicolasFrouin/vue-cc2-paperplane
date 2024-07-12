<script setup lang="ts">
import { AppTable } from '@/components';
import { usePhotosStore } from '@/stores';
import { onUnmounted } from 'vue';

const { data, error, loading, cancel } = usePhotosStore();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <AppTable :data="data" :error="error" :loading="loading" />
</template>
