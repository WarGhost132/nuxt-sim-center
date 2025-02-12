<script setup lang="ts">
defineProps<{
  label: string,
  icon: string,
}>()

defineEmits(['click'])
</script>

<template>
  <button type="button" class="cursor-pointer flex items-center hover:opacity-80" @click="$emit('click')">
    <UIcon :name="icon" />
    <span class="ml-3">{{ label }}</span>
  </button>
</template>
