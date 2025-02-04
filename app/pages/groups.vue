<template>
  <UiCard>
    <div class="flex flex-col gap-4">
      <GroupHeader />
      <div v-if="isLoadingStore.isLoading">
        <UiLoader />
      </div>

      <div v-else class="flex flex-wrap w-full gap-4">
        <div v-for="group in groups" :key="group.id">
          <GroupCard :group="group" />
        </div>
      </div>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '~/components/common/card/UiCard.vue'
import GroupHeader from '~/components/modules/groups/GroupHeader.vue'
import GroupCard from '~/components/modules/groups/GroupCard.vue'

useSeoMeta({
  title: 'Учебные группы',
})

const groups = ref<IGroup[]>([])
const isLoadingStore = useIsLoadingStore()

onMounted(async () => {
  isLoadingStore.set(true)
  groups.value = await getGroupsAsync()
  isLoadingStore.set(false)
})
</script>
