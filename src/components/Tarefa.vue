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
      <button
          class="btnEditar"
          @click="editarTarefa(tarefa.id)"
      >
        <img src="../assets/lapis.svg" alt="img editar" />
      </button>
      <router-link :to="'/about/' + tarefa.id">
        <button class="btnDetalhes">
          detalhes
<!--          <img src="../assets/lapis.svg" alt="img editar" />-->
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
      nome: '',
      tipo: '',
      descricao: '',
    };
  },
  methods: {
    excluirTarefa(id) {
      const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
      this.$store.dispatch('excluirTarefa', index);
    },
    editarTarefa(id) {
      const tarefaEncontrada = this.tarefas.find(tarefa => tarefa.id === id);
      console.log('tarefa ->' + tarefaEncontrada)
      this.$store.dispatch('editarTarefa', tarefaEncontrada);
    }
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