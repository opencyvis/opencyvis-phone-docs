<template>
  <div class="columns">
    <slot />
  </div>
</template>

<style scoped>
.columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin: 16px 0;
}
</style>
