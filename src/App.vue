<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { RouteType } from '@/stores/common';
</script>

<template>
  <div class="flex flex-col">
    <header class="w-screen flex justify-center items-center py-2 bg-primary-300">
      <nav class="flex gap-2">
        <RouterLink to="/" class="capitalize py-1 px-2 bg-primary-600 text-zinc-100 rounded-md hover:bg-primary-800">
          Home
        </RouterLink>
        <RouterLink
          v-for="item in RouteType"
          :key="item"
          :to="`/${item}`"
          class="capitalize py-1 px-2 bg-primary-600 text-zinc-100 rounded-md hover:bg-primary-800"
        >
          {{ item }}
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
