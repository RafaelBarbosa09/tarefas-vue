<template>
  <div class="about">
    <Header :titulo="titulo" />

    <div id="nav">
      <router-link to="/">Voltar</router-link>
    </div>

    <section>
      <div class="container">
        <p><strong>Id:</strong> {{tarefa.id}}</p>
        <p><strong>Tarefa:</strong> {{ tarefa.nome }}</p>
        <p><strong>última alteracao:</strong> {{ formatar(tarefa.data) }}</p>
        <p><strong>Prioridade:</strong> prioridade {{ tarefa.tipo }}</p>
        <p><strong>Descricao:</strong> {{ tarefa.descricao }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "About",
  components: {Header},
  data() {
    return {
      id: this.$route.params.id,
      titulo: 'Detalhes',
      tarefas: this.$store.getters.listaTarefas,
      tarefa: {}
    }
  },
  methods: {
    formatar(data) {
      const formatter = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: "medium"
      });
      return formatter.format(data);
    }
  },
  created() {
    this.tarefa = this.tarefas.find(tarefa => tarefa.id == this.$route.params.id);
  }
}
</script>

<style scoped>
#nav a {
  color: var(--title);
  text-decoration: none;
}

section {
  max-width: 500px;
  margin: 2rem auto;
}

.container {
  background: var(--shape);
  box-shadow: 0 6px 10px -4px rgb(0 0 0 / 15%);
  border-radius: 0.5rem;
  padding: 2rem;
}

p {
  font-size: 1.2rem;
}

p + p {
  margin-top: 1rem;
}
</style>