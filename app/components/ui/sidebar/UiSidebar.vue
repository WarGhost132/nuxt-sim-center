<template>
  <aside
    class="sticky top-0 z-10 md:h-screen bg-[var(--ui-sidebar)] border-r border-gray-200 p-4 transition-all duration-300 ease-in-out overflow-hidden"
    :class="{ 
      'h-[470px] w-full md:w-64': !isCollapsed,
      'h-18 md:w-18.5': isCollapsed
    }"
  >
    <div class="flex justify-end md:justify-start">
      <button class="mb-4 p-2 hover:bg-gray-100 rounded cursor-pointer" @click="$emit('toggle')">
        <UIcon 
          :name="isCollapsed ? 'i-heroicons-bars-3' : 'i-heroicons-x-mark'" 
          class="w-6 h-6" 
        />
      </button>
    </div>
    

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
              class="ml-2 md:transition-opacity md:duration-300 md:ease-in-out md:flex-shrink-0"
              :class="{ 'md:opacity-0': isCollapsed, 'md:opacity-100': !isCollapsed }"
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
  }
});

defineEmits(['toggle']);

const menu = useMenu()

const route = useRoute()

</script>