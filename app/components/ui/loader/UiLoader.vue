<template>
  <div class="flex justify-center items-center min-h-64">
    <div class="flex space-x-2">
      <span class="loader-dot animate-bounce delay-0"/>
      <span class="loader-dot animate-bounce delay-150" />
      <span class="loader-dot animate-bounce delay-300" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.loader-dot {
  width: 24px;
  height: 24px;
  background-color: var(--ui-primary);
  border-radius: 50%;
  display: inline-block;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.animate-bounce {
  animation: bounce 1.5s infinite ease-in-out;
}

.delay-0 {
  animation-delay: 0s;
}

.delay-150 {
  animation-delay: 0.15s;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>
