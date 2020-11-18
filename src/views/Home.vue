<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
  </form>
  <hr />
  <ListarTareas />
</template>

<script>
// @ is an alias to /src
import Input from "../components/Input";
import ListarTareas from "../components/ListaTareas";
import { mapActions } from "vuex";
const shortId = require("shortid");
export default {
  name: "Home",
  components: {
    Input,
    ListarTareas,
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(["setTareas", "cargarLocalStorage"]),
    procesarFormulario() {
      console.log(this.tarea);
      if (this.tarea.nombre.trim() === "") {
        console.log("empty");
        return;
      }
      console.log("not empty");
      // generating Ids
      this.tarea.id = shortId.generate();
      console.log(this.tarea.id);

      // Sending data
      this.setTareas(this.tarea);

      // Cleaning data
      this.tarea = {
        id: "",
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      };
    },
  },
  created() {
    this.cargarLocalStorage();
  },
};
</script>
