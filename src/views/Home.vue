<template>
  <div>
    <Header :titulo="Tarefas" />
    <form>
      <div v-if="erros.length">
        <ul>
          <li v-for="error in erros" :key="error">{{ error }}</li>
        </ul>
      </div>
      <input
        type="text"
        v-model="nome">

      <select v-model="tipo">
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>

      <input
        type="text"
        v-model="descricao">

      <button @click.prevent.stop="salvarTarefa">salvar</button>
      <button @click.prevent.stop="teste">editar</button>
    </form>
    <div v-if="tarefas.length > 0">
      <section v-for="tarefa in tarefas" class="tarefa" :key="tarefa.id">
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
              @click="editarTarefa(tarefa.id)"
          >
            <img src="../assets/lapis.svg" alt="img editar" />
          </button>
          <router-link :to="'/about/' + tarefa.id">
            <button class="btnDetalhes">
              detalhes
            </button>
          </router-link>
        </div>
      </section>
    </div>
    <div v-else>
      <p>Nenhuma tarefa cadastrada</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'Home',
  components: {Header},
  data() {
    return {
      id: 0,
      nome: '',
      tipo: '',
      descricao: '',
      tarefa: {},
      erros: [],
    }
  },
  methods: {
    salvarTarefa() {
      this.validaForm();
      if(this.erros.length === 0) {
        this.$store.dispatch('salvarTarefa', {
          id: Math.random(),
          data: new Date(),
          nome: this.nome,
          tipo: this.tipo,
          descricao: this.descricao,
        });
        this.limparInputs();
      }
    },
    excluirTarefa(id) {
      const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
      this.$store.dispatch('excluirTarefa', index);
    },
    editarTarefa(id) {
      const tarefaEncontrada = this.tarefas.find(tarefa => tarefa.id === id);

      this.nome = tarefaEncontrada.nome;
      this.tipo = tarefaEncontrada.tipo;
      this.descricao = tarefaEncontrada.descricao;
      this.tarefa = tarefaEncontrada;
    },
    teste() {
      this.validaForm();
      if(this.erros.length === 0) {
        const tarefaEditada = this.tarefa;

        tarefaEditada.nome = this.nome;
        tarefaEditada.tipo = this.tipo;
        tarefaEditada.descricao = this.descricao;

        this.$store.dispatch('editarTarefa', tarefaEditada);
        this.limparInputs();
      }
    },
    limparInputs() {
      this.nome = '';
      this.tipo = '';
      this.descricao = '';
    },
    validaForm() {
      this.erros = [];

      if (!this.nome) {
        this.erros.push('Informe o nome');
      }
      if (!this.tipo) {
        this.erros.push('Informe o tipo');
      }
      if (!this.descricao) {
        this.erros.push('Informe a descricão');
      }
    }
  },
  computed: {
    tarefas() {
      return this.$store.getters.listaTarefas;
    }
  }
}
</script>

// import Tarefa from "@/components/Tarefa";
// import Cadastro from "@/components/Cadastro";
// components: {Cadastro, Tarefa},
<!--    <Cadastro />-->
<!--        <Tarefa :tarefa="tarefa" />-->