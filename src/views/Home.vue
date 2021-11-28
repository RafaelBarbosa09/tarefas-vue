<template>
  <div>
  <form>
    <input
        type="text"
        v-model="nome">

    <select v-model="tipo">
      <option value="baixa">Baixa</option>
      <option value="media">Média</option>
      <option value="alta">Alta</option>
    </select>

    <textArea v-model="descricao">

    </textArea>

    <button @click.prevent.stop="salvarTarefa">salvar</button>
  </form>

  <div v-for="tarefa in tarefas" class="tarefa" :key="tarefa.id">
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
      <button
        class="btnEditar"
        >
        <img src="../assets/lapis.svg" alt="img editar" />
      </button>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
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
