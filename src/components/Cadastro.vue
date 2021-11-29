<template>
  <form>
    <input
      type="text"
      v-model="nome">

    <select v-model="tipo">
      <option value="baixa">Baixa</option>
      <option value="media">Média</option>
      <option value="alta">Alta</option>
    </select>

    <textArea v-model="descricao"></textArea>

    <button @click.prevent.stop="salvarTarefa">salvar</button>
  </form>
</template>

<script>
export default {
  name: "Cadastro",
  data() {
    return {
      nome: '',
      tipo: '',
      descricao: '',
    }
  },
  methods: {
    salvarTarefa() {
      this.$store.dispatch('salvarTarefa', {
        id: Math.random(),
        data: new Date(),
        nome: this.nome,
        tipo: this.tipo,
        descricao: this.descricao,
      });
    },
  }
}
</script>

<style scoped>

</style>