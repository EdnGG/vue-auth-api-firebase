<template>
  <h1 class="text-center mt-4">Edit Section</h1>
  <form @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "../components/Input";
export default {
  components: {
    Input,
  },
  computed: {
    // tarea es el objeto dentro de state
    ...mapState(["tarea"]),
  },
  methods: {
    // Metodo setTarea dperteneciente a actions dentro de store
    ...mapActions(["setTarea", "updateTarea"]),
  },
  created() {
    // Es el Id de la URL
    this.setTarea(this.$route.params.id);
  },
};
</script>

<style>
</style>