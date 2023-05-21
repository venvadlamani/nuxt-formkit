<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () =>
  colorMode.value === 'light'
    ? (colorMode.preference = 'dark')
    : (colorMode.preference = 'light');
</script>

<template>
  <button aria-label="Color Mode" class="inline-block" @click="onClick">
    <template v-if="colorMode.value === 'dark'">
      <UIcon name="i-heroicons-moon" class="w-4 h-4" />
      <span class="sr-only">Dark Mode</span>
    </template>
    <template v-else>
      <UIcon name="i-heroicons-light-bulb" class="w-4 h-4" />
      <span class="sr-only">Light Mode</span>
    </template>
  </button>
</template>
