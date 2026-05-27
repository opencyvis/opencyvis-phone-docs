<template>
  <component :is="link ? 'a' : 'div'" :href="link" class="card">
    <span v-if="icon" class="card-icon">{{ icon }}</span>
    <span class="card-title">{{ title }}</span>
    <span class="card-desc">{{ desc }}</span>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  desc: string
  link?: string
}>()
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: border-color 0.25s, box-shadow 0.25s;
  text-decoration: none;
  color: inherit;
}
.card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px var(--vp-c-brand-soft);
}
.card-icon {
  font-size: 24px;
  line-height: 1;
}
.card-title {
  font-size: 16px;
  font-weight: 600;
}
.card-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
