<script setup lang="ts">
import flattenObj from '@/lib/helpers';
import { routes, type RoutesType } from '@/router';

defineProps<{ item: any }>();
</script>

<template>
  <table>
    <tbody>
      <tr v-for="[key, val] in Object.entries(flattenObj(item))" :key="key" class="bg-white dark:bg-gray-700">
        <th
          class="px-6 py-3 bg-gray-50 font-medium text-gray-500 uppercase tracking-wider text-center dark:bg-gray-600 dark:text-gray-200"
        >
          {{ key.split('.').pop() }}
        </th>
        <td class="px-6 py-3">
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
          <span v-else-if="typeof val === 'boolean'" class="text-center inline-block w-full">
            {{ val ? '✅' : '❌' }}
          </span>
          <span v-else>{{ val }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
