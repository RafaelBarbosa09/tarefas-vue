<template>
  <div class="about">
    {{$store.getters.listaTarefas}}
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

      <button @click.prevent.stop="editarTarefa">salvar</button>
    </form>

    <p>{{ tarefa.id }}</p>
    <p>{{ tarefa.nome }}</p>
    <p>{{ tarefa.data }}</p>
    <p>{{ tarefa.tipo }}</p>
    <p>{{ tarefa.descricao }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      id: this.$route.params.id,
      nome: '',
      tipo: '',
      descricao: '',
      tarefa: {},
    }
  },
  computed: {
    tarefas() {
      return this.$store.getters.listaTarefas;
    }
  },
  methods: {
    buscaTarefa: function(id) {
      console.log('methods -> ' + id);
      console.log('tarefas -> ' + this.tarefas);
      this.tarefa = this.tarefas.find(tarefa => tarefa.id === id);
    }
  },
  created() {
    this.buscaTarefa(this.id);
  }
}
</script>