<script setup lang="ts">
import flattenObj from '@/lib/helpers';
import { routes, type RoutesType } from '@/router';
import ViewBase from './ViewBase.vue';

type Item = {
  id: number;
  [key: string]: unknown;
};

defineProps<{ data: Item[] | null; error: Error | null; loading: boolean }>();
</script>

<template>
  <ViewBase :data="data" :error="error" :loading="loading">
    <table v-if="data">
      <thead>
        <tr>
          <th
            v-for="key in Object.keys(flattenObj(data[0]))"
            :key="key"
            class="px-6 py-3 bg-gray-50 text-left font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-700 dark:text-gray-200"
          >
            {{ key.split('.').pop() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id" class="bg-white dark:bg-gray-800">
          <td
            v-for="[key, val] in Object.entries(flattenObj(item))"
            :key="key"
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200"
            :class="{ 'w-full text-center': typeof val === 'boolean' || typeof val === 'number' }"
          >
            <RouterLink
              v-if="key.endsWith('Id') && routes[`${key.slice(0, -2)}s`.toLowerCase() as RoutesType].children[1]?.name"
              class="text-primary-600 hover:text-primary-900 underline py-1 px-2 -my-1 -mx-2 dark:text-primary-400 dark:hover:text-primary-600"
              :to="
                $router.resolve({
                  name: routes[`${key.slice(0, -2)}s`.toLowerCase() as RoutesType].children[1]?.name,
                  params: { id: val },
                }).fullPath
              "
            >
              {{ val }}
            </RouterLink>
            <span v-else-if="typeof val === 'boolean'">
              {{ val ? '✅' : '❌' }}
            </span>
            <span v-else>{{ val }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </ViewBase>
</template>
