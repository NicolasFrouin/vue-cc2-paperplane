<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppHeader } from './components';
</script>

<template>
  <div class="flex flex-col dark:bg-gray-900 dark:text-white h-max min-h-screen">
    <AppHeader />
    <main class="text-base flex justify-center">
      <RouterView />
    </main>
  </div>
</template>

<style lang="postcss">
html * {
  @apply transition-colors duration-200 ease-linear;
}
</style>
