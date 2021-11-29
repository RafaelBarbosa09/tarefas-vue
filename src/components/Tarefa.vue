<template>
  <div>
    <p>{{ tarefa.id }}</p>
    <p>{{ tarefa.nome }}</p>
    <p>{{ tarefa.data }}</p>
    <p>{{ tarefa.tipo }}</p>
    <p>{{ tarefa.descricao }}</p>
    <div class="botoes">
      <button
          class="btnExcluir"
          @click="excluirTarefa(tarefa.id)">
        <img src="../assets/lixo.svg" alt="img excluir" />
      </button>
      <router-link :to="'/about/' + tarefa.id">
        <button class="btnEditar">
          <img src="../assets/lapis.svg" alt="img editar" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tarefa",
  props: {
    tarefa: Object,
    excluirTarefa: Function
  },
  data() {
    return {
      link: '/about/'
    };
  }
}
</script>

<style scoped>

</style>