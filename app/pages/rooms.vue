<template>
  <UiCard>
    <div class="flex flex-col gap-4 w-full">
      <RoomHeader />
      <div v-if="isLoadingStore.isLoading">
        <UiLoader />
      </div>

      <div v-else class="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <div v-for="room in rooms" :key="room.id">
          <RoomCard :room="room" />
        </div>
      </div>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '~/components/common/card/UiCard.vue'
import RoomCard from '~/components/modules/rooms/RoomCard.vue';
import RoomHeader from '~/components/modules/rooms/RoomHeader.vue';

useSeoMeta({
  title: 'Список комнат',
})

const rooms = ref<IRoom[]>([])
const isLoadingStore = useIsLoadingStore()

onMounted(async () => {
  isLoadingStore.set(true)
  rooms.value = await getRoomsAsync()
  isLoadingStore.set(false)
})
</script>
