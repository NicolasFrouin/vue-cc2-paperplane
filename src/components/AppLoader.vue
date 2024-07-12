<script setup lang="ts"></script>

<template>
  <div
    class="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center loading mt-12 dark:bg-gray-800 dark:bg-opacity-95"
  >
    <div
      class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500 dark:border-primary-300"
    ></div>
  </div>
</template>

<style>
html:has(.loading) {
  overflow: hidden;
  height: 100%;
}
</style>
