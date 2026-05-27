<template>
  <div :class="['callout', `callout-${type}`]">
    <span class="callout-label">{{ label }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'info' | 'warning' | 'danger' | 'tip'
}>(), { type: 'info' })

const labels: Record<string, string> = {
  info: 'ℹ️ Info',
  warning: '⚠️ Warning',
  danger: '🚫 Danger',
  tip: '💡 Tip',
}

const label = labels[props.type]
</script>

<style scoped>
.callout {
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
  border-left: 4px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.callout-warning {
  border-left-color: #e5a00d;
}
.callout-danger {
  border-left-color: #e5484d;
}
.callout-tip {
  border-left-color: #30a46c;
}
.callout-label {
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
}
</style>
