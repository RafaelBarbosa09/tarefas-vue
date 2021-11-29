<template>
  <div class="about">
    <Header :titulo="Detalhes" />
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>

    {{id}}

<!--    <p>{{ tarefa.nome }}</p>-->
<!--    <p>{{ tarefa.data }}</p>-->
<!--    <p>{{ tarefa.tipo }}</p>-->
<!--    <p>{{ tarefa.descricao }}</p>-->
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "About",
  components: {Header},
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    buscaTarefa: function(id) {
      console.log('methods -> ' + id);
      console.log('tarefas -> ' + this.tarefas);

      // return lista.find(tarefa => tarefa.id === id);
    }
  },
}
</script>