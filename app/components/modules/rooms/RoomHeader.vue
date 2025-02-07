<template>
  <div class="flex justify-center lg:justify-between flex-wrap gap-4">
    <h2 class="font-extrabold text-2xl">Список комнат</h2>
    <div class="flex gap-4">
      <RoomSearch />
      <RoomCreate />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RoomCreate from './RoomCreate.vue';
import RoomSearch from './RoomSearch.vue';
</script>

