<template>
  <aside
    class="h-screen bg-[var(--ui-sidebar)] border-r border-gray-200 p-4 transition-all duration-300 ease-in-out"
    :class="{ 'w-64': !isCollapsed, 'w-18.5': isCollapsed }"
  >
    <button class="mb-4 p-2 hover:bg-gray-100 rounded cursor-pointer" @click="$emit('toggle')">
      <UIcon 
        :name="isCollapsed ? 'i-heroicons-bars-3' : 'i-heroicons-x-mark'" 
        class="w-6 h-6" 
      />
    </button>

    <nav>
      <ul class="space-y-2 overflow-hidden">
        <li v-for="item in menu" :key="item.url">
          <NuxtLink 
            :to="item.url"
            class="flex items-center p-2 rounded"
            :class="[
              route.path === item.url ? 'bg-[var(--ui-primary)] text-[var(--ui-secondary)] hover:bg-[var(--ui-primary)]' : 'hover:bg-gray-100'
            ]"
          >
            <UIcon :name="item.icon" class="w-6 h-6 shrink-0" />
            <span 
              v-if="!isCollapsed"
              class="ml-2 transition-opacity duration-300 ease-in-out flex-shrink-0"
              :class="{ 'opacity-0': isCollapsed, 'opacity-100': !isCollapsed }"
            >
              {{ item.name }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
defineProps({
  isCollapsed: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['toggle']);

const menu = useMenu()

const route = useRoute()
</script>