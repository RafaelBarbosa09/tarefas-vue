import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [],
    tarefa: {},
  },
  getters: {
    listaTarefas(state) {
      return state.tarefas;
    }
  },
  mutations: {
    salvarTarefa(state, payload) {
      state.tarefas.push(payload);
    },
    excluirTarefa(state, payload) {
      state.tarefas.splice(payload, 1);
    },
    editarTarefa(state, payload) {
      state.tarefas[payload.index] = payload;
    },
  },
  actions: {
    salvarTarefa(context, payload) {
      context.commit('salvarTarefa', payload);
    },
    excluirTarefa(context, payload) {
      context.commit('excluirTarefa', payload);
    },
    editarTarefa(context, payload) {
      context.commit('editarTarefa', payload);
    },
  },
  modules: {
  }
})
