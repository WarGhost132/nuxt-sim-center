<template>
  <div class="w-full">
    <UTable
      ref="table"
      v-model:sorting="sorting"
      v-model:pagination="pagination"
      :data="sortedAndPaginatedSessions"
      :columns="columns"
      :pagination-options="paginationOptions"
      class="flex-1"
    />

    <div class="flex justify-center border-t border-[var(--color-border)] pt-4">
      <UPagination
        :default-page="pagination.pageIndex + 1"
        :items-per-page="pagination.pageSize"
        :total="filteredSessions.length"
        @update:page="(p) => pagination.pageIndex = p - 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import UiBadge from '~/components/common/badge/UiBadge.vue'
import UiButton from '~/components/common/button/UiButton.vue'
import { getPaginationRowModel } from '@tanstack/vue-table'
import { useSearchStore } from '~/stores/search.store'

const table = useTemplateRef('table')

const props = defineProps<{ sessions: ISession[] }>()

const groups = ref<IGroup[]>([])
const rooms = ref<IRoom[]>([])

const searchStore = useSearchStore()
const globalFilter = computed(() => searchStore.searchQuery)

onMounted(async () => {
  groups.value = await getGroupsAsync()
  rooms.value = await getRoomsAsync()
})

const columns: TableColumn<ISession>[] = [
  {
    accessorKey: 'date',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()

      return h(UiButton, {
        label: 'Дата',
        icon: isSorted
          ? isSorted === 'asc'
            ? 'i-lucide-arrow-up-narrow-wide'
            : 'i-lucide-arrow-down-wide-narrow'
          : 'i-lucide-arrow-up-down',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      })
    },
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

const sorting = ref([
  {
    id: 'date',
    desc: false
  }
])

const pagination = ref({
  pageIndex: 0,
  pageSize: 8
})

const paginationOptions = {
  getPaginationRowModel: getPaginationRowModel()
}

const filteredSessions = computed(() => {
  if (!globalFilter.value.trim()) return props.sessions

  const filterText = globalFilter.value.toLowerCase().trim()

  return props.sessions.filter(session =>
    session.name.toLowerCase().includes(filterText) ||
    session.type.toLowerCase().includes(filterText) ||
    session.status.toLowerCase().includes(filterText)
  )
})

const sortedSessions = computed(() => {
  const [sort] = sorting.value
  if (!sort) return filteredSessions.value

  const { id, desc } = sort

  return [...filteredSessions.value].sort((a, b) => {
    const aValue = a[id as keyof ISession]
    const bValue = b[id as keyof ISession]

    if (aValue < bValue) return desc ? 1 : -1
    if (aValue > bValue) return desc ? -1 : 1
    return 0
  })
})

const sortedAndPaginatedSessions = computed(() => {
  const start = pagination.value.pageIndex * pagination.value.pageSize
  const end = start + pagination.value.pageSize
  return sortedSessions.value.slice(start, end)
})
</script>
