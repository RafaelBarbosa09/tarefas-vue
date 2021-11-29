<template>
  <div>
    <div v-if="tarefas.length > 0">
      <section v-for="tarefa in tarefas" class="tarefa" :key="tarefa.id">
        <Tarefa :tarefa="tarefa" />
      </section>
    </div>
    <div v-else>
      <p>Nenhuma tarefa cadastrada</p>
    </div>
  </div>
</template>

<script>
import Tarefa from "@/components/Tarefa";

export default {
  name: 'Home',
  components: {Tarefa},
  data() {
    return {}
  },
  computed: {
    tarefas() {
      return this.$store.getters.listaTarefas;
    }
  }
}
</script>
