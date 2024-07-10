<script setup lang="ts">
import flattenObj from '@/lib/helpers';
import { useUsersStore } from '@/stores';
import { onUnmounted } from 'vue';
import { AppLoader } from '@/components';

const { data, error, loading, cancel } = useUsersStore();

onUnmounted(() => {
  cancel();
});
</script>

<template>
  <AppLoader v-if="loading" />
  <div v-else class="overflow-x-auto p-8">
    <table v-if="!error && data" class="min-w-full">
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
    <div v-else class="error-message bg-red-500 text-white p-4 mt-4">{{ error }}</div>
  </div>
</template>
