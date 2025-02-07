<template>
  <div class="w-full">
    <UTable
      ref="table"
      v-model:pagination="pagination"
      :data="paginatedSessions"
      :columns="columns"
      :pagination-options="paginationOptions"
      class="flex-1"
    />

    <div class="flex justify-center border-t border-[var(--color-border)] pt-4">
      <UPagination
        :default-page="pagination.pageIndex + 1"
        :items-per-page="pagination.pageSize"
        :total="props.sessions.length"
        @update:page="(p) => pagination.pageIndex = p - 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, ref, onMounted, computed } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import UiBadge from '~/components/common/badge/UiBadge.vue'
import { getPaginationRowModel } from '@tanstack/vue-table'

const table = useTemplateRef('table')

const props = defineProps<{ sessions: ISession[] }>()

const groups = ref<IGroup[]>([])
const rooms = ref<IRoom[]>([])

onMounted(async () => {
  groups.value = await getGroupsAsync()
  rooms.value = await getRoomsAsync()
})

const columns: TableColumn<ISession>[] = [
  {
    accessorKey: 'date',
    header: 'Дата',
  },
  {
    accessorKey: 'time',
    header: 'Время',
  },
  {
    accessorKey: 'status',
    header: 'Статус',
    cell: ({ row }) => {
      return h(UiBadge, { 
        badgeStatus: String(row.getValue('status'))
       })
    }
  },
  {
    accessorKey: 'name',
    header: 'Название учебного модуля',
  },
  {
    accessorKey: 'type',
    header: 'Тип сессии'
  },
  {
    accessorKey: 'room',
    header: 'Комната',
    cell: ({ row }) => {
      const roomIds = row.getValue('room') as string[]
      const roomNames = roomIds.map(id => {
        const room = rooms.value.find(room => room.id === id)
        return room ? room.name : 'Неизвестно'
      }).join(', ')
      return h('span', roomNames)
    }
  },
  {
    accessorKey: 'group',
    header: 'Группа',
    cell: ({ row }) => {
      const groupId = row.getValue('group') as string
      const group = groups.value.find(group => group.id === groupId)
      return h('span', group ? group.name : 'Неизвестно')
    }
  }
]

const pagination = ref({
  pageIndex: 0,
  pageSize: 8
})

const paginationOptions = {
  getPaginationRowModel: getPaginationRowModel()
}

const paginatedSessions = computed(() => {
  const start = pagination.value.pageIndex * pagination.value.pageSize
  const end = start + pagination.value.pageSize
  return props.sessions.slice(start, end)
})
</script>
