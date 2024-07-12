<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { routes } from '@/router';
</script>

<template>
  <header class="w-full flex justify-center items-center py-2 dark:bg-primary-700">
    <nav class="flex gap-2">
      <RouterLink
        v-for="{ path, name } in routes"
        :key="path"
        :to="path"
        class="capitalize py-1 px-2 bg-primary-600 text-white rounded-md hover:bg-primary-800 dark:bg-primary-900 dark:hover:bg-fuchsia-700"
      >
        {{ name }}
      </RouterLink>
    </nav>
  </header>
</template>
