<template>
  <div class="w-full xs:min-w-xs p-4 border border-gray-200 flex flex-col rounded-lg shadow-lg gap-3">
    <span class="font-bold text-lg">{{ group.name }}</span>
    <hr>
    <span>{{ group.faculty }}</span>
    <span>{{ group.specialization }}</span>
    <div class="flex">
      <UIcon name="i-ph:users" size="25" class="text-[var(--ui-primary)]" />
      <span class="ml-2">{{ group.studentsCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  group: IGroup
}>()
</script>