<template>
  <div class="flex justify-center lg:justify-between flex-wrap gap-4">
    <h2 class="font-extrabold text-2xl">Учебные сессии</h2>
    <div class="flex gap-4">
      <SessionSearch />
      <SessionCreate />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SessionCreate from './SessionCreate.vue';
import SessionSearch from './SessionSearch.vue';
</script>

