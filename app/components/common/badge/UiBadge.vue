<script setup lang="ts">
const props = defineProps<{
  badgeStatus: string,
}>()

const status = computed(() => {
  switch (props.badgeStatus) {
    case 'Запланировано':
      return 'bg-[var(--color-badge-planned)]'
    case 'Идет':
      return 'bg-[var(--color-badge-proccess)]'
    case 'Завершено':
      return 'bg-[var(--color-badge-done)]'
    default:
      return ''
  }
})
</script>

<template>
  <span class="px-3 py-1 rounded-3xl text-[var(--color-text)]" :class="status">
    {{ badgeStatus }}
  </span>
</template>
