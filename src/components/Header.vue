<template>
  <header>
    <h1>{{ titulo }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    titulo: String
  }
}
</script>

<style scoped>
header {
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15rem;

}

header h1 {
  font-size: 2.5rem;
  color: var(--shape)
}
</style>