<template>
  <div class="w-full xs:min-w-xs p-4 border border-[var(--ui-border)] flex flex-col rounded-lg shadow-lg gap-3">
    <div class="flex">
      <UIcon name="i-material-symbols:meeting-room-rounded" size="25" class="text-[var(--ui-primary)]" />
      <span class="ml-2">{{ room.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  room: IRoom
}>()
</script>