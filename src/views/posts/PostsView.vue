<script setup lang="ts">
import { AppTable } from '@/components';
import { usePostsStore } from '@/stores';
import { onUnmounted } from 'vue';

const { data, error, loading, cancel } = usePostsStore();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <AppTable :data="data" :error="error" :loading="loading" />
</template>
