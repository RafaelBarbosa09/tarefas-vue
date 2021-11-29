<template>
  <div>
    <p>{{ tarefa.id }}</p>
    <p>{{ tarefa.nome }}</p>
    <p>{{ tarefa.tipo }}</p>
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
  },
  data() {
    return {
      link: '/about/'
    };
  },
  methods: {
    excluirTarefa(id) {
      const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
      this.$store.dispatch('excluirTarefa', index);
    },
  },
  computed: {
    tarefas() {
      return this.$store.getters.listaTarefas;
    }
  }
}
</script>

<style scoped>

</style>