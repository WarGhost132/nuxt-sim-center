<template>
  <div class="flex min-h-screen">
    <UiSidebar :is-collapsed="isSidebarCollapsed" @toggle="toggleSidebar" />
    <main class="flex-1 p-4 transition-all duration-300">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import UiSidebar from '~/components/ui/sidebar/UiSidebar.vue';

const isSidebarCollapsed = ref(false)

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>