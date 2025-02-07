<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      color="neutral"
      variant="ghost"
      class="flex justify-center"
      @click="isDark = !isDark"
    >
      <UIcon class="w-5 h-5" :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" />
    </UButton>

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>