<script setup lang="ts">
import fetchUsers from '@/api/users';
import flattenObj from '@/lib/helpers';
import { onUnmounted } from 'vue';

const { data, error, loading, cancel } = fetchUsers();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <div
    v-if="loading"
    class="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center"
    :class="{ loading }"
  >
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
  </div>
  <div v-else class="overflow-x-auto p-8">
    <table v-if="!error && data">
      <thead>
        <tr>
          <th
            v-for="key in Object.keys(flattenObj(data[0]))"
            :key="key"
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ key.split('.').pop() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user.id" class="bg-white">
          <td
            v-for="[key, val] in Object.entries(flattenObj(user))"
            :key="key"
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
          >
            {{ val }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      Error: {{ error }}
      <button type="button" @click="fetchUsers">Retry</button>
    </div>
  </div>
</template>

<style>
html:has(.loading) {
  overflow: hidden;
  height: 100%;
}
</style>
