<script setup lang="ts">
import { ItemDetails, ViewBase } from '@/components';
import { useTodosStore } from '@/stores';
import { onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { data, error, loading, cancel } = useTodosStore(Number(route.params.id as string));

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <ViewBase :data="data" :error="error" :loading="loading">
    <ItemDetails :item="data" />
  </ViewBase>
</template>
