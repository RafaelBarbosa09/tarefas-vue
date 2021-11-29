<template>
  <div>
    <Header :titulo="titulo" />
    <div v-if="erros.length">
      <p v-for="error in erros" :key="error" class="erros">{{ error }}</p>
    </div>
    <main>
      <div class="container">
        <form>
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              v-model="nome">
          </div>

          <div class="form-group">
            <label>Tipo:</label>
            <select v-model="tipo">
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
          </div>

          <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input
                id="descricao"
              type="text"
              v-model="descricao">
          </div>

          <button @click.prevent.stop="salvarTarefa" class="btnSalvar">salvar</button>
          <button @click.prevent.stop="teste" class="btnSalvar">editar</button>
        </form>
      </div>
      <div v-if="tarefas.length > 0">
        <section>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tarefa" v-for="tarefa in tarefas" :key="tarefa.id">
                <td>{{ tarefa.nome }}</td>
                <td>prioridade {{ tarefa.tipo }}</td>
                <td>
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
                        <img src="../assets/detalhes.svg" alt="img detalhes" />
                      </button>
                    </router-link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div v-else class="emptyList">
        <p>Nenhuma tarefa cadastrada</p>
      </div>
    </main>
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
      titulo: 'Tarefas'
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
.erros {
  padding: 0.75rem 1.25rem;
  margin: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #f5c6cb;
  color: #721c24;
  background-color: var(--color-danger);
}
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2.5rem 1rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 20px 0px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container form {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form .form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input, select, textArea {
  padding: 0.8rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--title);
  border: 1px solid #d7d7d7;
  background: var(--shape);
}

input::placeholder {
  color: var(--title);
}

label {
  font-size: 1rem;
  margin-bottom: .3rem;
  color: var(--title);
}

img {
  color: var(--title);
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
}

.btnSalvar {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.2rem;
  color: var(--shape);
  background: var(--color-primary);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
}

section {
  max-width: 800px;
  margin: 2rem auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

tbody {
  background: var(--shape);
  box-shadow: 0 6px 10px -4px rgb(0 0 0 / 15%);
  border-radius: 0.5rem;
}

td, th {
  padding: 1rem 2rem;
  text-align: center;
}

.tarefa {
  height: 4rem;
  padding: 2.5rem 1rem;
}

.tarefa + .tarefa {
  border-top: 1px solid #e9e9e9;
}

.botoes {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnExcluir, .btnEditar, .btnDetalhes {
  background: transparent;
  border: 0;
  margin: 0 .3rem;
}

.emptyList {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--title);
}
</style>

// import Tarefa from "@/components/Tarefa";
// import Cadastro from "@/components/Cadastro";
// components: {Cadastro, Tarefa},
<!--    <Cadastro />-->
<!--        <Tarefa :tarefa="tarefa" />-->