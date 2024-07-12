<script setup lang="ts">
import { AppTable } from '@/components';
import { useCommentsStore } from '@/stores';
import { onUnmounted } from 'vue';

const { data, error, loading, cancel } = useCommentsStore();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <AppTable :data="data" :error="error" :loading="loading" />
</template>
