<script setup lang="ts">
import { useAlbumsStore } from '@/stores';
import { onUnmounted } from 'vue';
import AppTable from '@/components/AppTable.vue';

const { data, error, loading, cancel } = useAlbumsStore();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <AppTable :data="data" :error="error" :loading="loading" />
</template>
