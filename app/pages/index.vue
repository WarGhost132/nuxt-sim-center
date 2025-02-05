<template>
  <UiCard>
    <div class="flex flex-col gap-4 w-full">
      <SessionHeader />
      <div v-if="isLoadingStore.isLoading">
        <UiLoader />
      </div>

      <div v-else>
        <SessionTable :sessions="sessions" />
      </div>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '~/components/common/card/UiCard.vue';
import SessionHeader from '~/components/modules/sessions/SessionHeader.vue'
import SessionTable from '~/components/modules/sessions/SessionTable.vue'

useSeoMeta({
  title: 'Учебные сессии',
})

const sessions = ref<ISession[]>([])
const isLoadingStore = useIsLoadingStore()

onMounted(async () => {
  isLoadingStore.set(true)
  sessions.value = await getSessionsAsync()
  isLoadingStore.set(false)
})
</script>
