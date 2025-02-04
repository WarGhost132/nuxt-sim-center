<template>
  <div class="flex justify-center lg:justify-between flex-wrap gap-4">
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

