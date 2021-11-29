<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>