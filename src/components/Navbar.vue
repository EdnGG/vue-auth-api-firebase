<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand"> Forms </router-link>
    <div class="d-flex">
      <router-link to="/" class="btn btn-dark" v-if="usuarioAutenticado">
        Todos
      </router-link>
      <router-link to="/login" class="btn btn-dark" v-if="!usuarioAutenticado">
        Sign In
      </router-link>
      <router-link
        to="/register"
        class="btn btn-dark"
        v-if="!usuarioAutenticado"
      >
        Sign Up
      </router-link>
      <button
        v-if="usuarioAutenticado"
        class="btn btn-dark"
        @click="cerrarSesion"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    /*Los getters al igual que el state se mapean 
en propiedades computed
*/
    ...mapGetters(["usuarioAutenticado"]),
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
};
</script>

