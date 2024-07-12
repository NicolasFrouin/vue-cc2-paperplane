<script setup lang="ts">
import { AppTable } from '@/components';
import { useUsersStore } from '@/stores';
import { onUnmounted } from 'vue';

const { data, error, loading, cancel } = useUsersStore();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <AppTable :data="data" :error="error" :loading="loading" />
</template>
