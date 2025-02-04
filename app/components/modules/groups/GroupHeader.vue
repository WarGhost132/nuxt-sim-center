<template>
  <div class="flex justify-between">
    <h2 class="font-extrabold text-2xl">Учебные группы</h2>
    <div class="flex gap-4">
      <GroupSearch />
      <GroupCreate />
    </div>
  </div>
</template>

<script lang="ts" setup>
import GroupCreate from './GroupCreate.vue';
import GroupSearch from './GroupSearch.vue';
</script>