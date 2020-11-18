<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">State</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
        <!-- <th scope="col">Delete</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tareas" :key="item.id">
        <th scope="row">1</th>
        <td>{{ item.nombre }}</td>
        <td>
          <!-- <span v-for="(cat, index) in item.categorias" :key="index"> -->
          <!-- {{ item.categorias.length === index + 1 ? cat : cat + ", " }} // opcion1 -->
          {{ item.categorias.join(", ") }}
          <!-- </span> -->
        </td>
        <td>{{ item.estado }}</td>
        <td>{{ item.numero }}</td>
        <td>
          <button @click="deleteTareas(item.id)" class="btn btn-danger btn-sm">
            Delete
          </button>
          <router-link
            :to="{
              name: 'Editar',
              params: {
                id: item.id,
              },
            }"
            class="btn btn-warning btn-sm ml-2"
          >
            Edit
          </router-link>
        </td>
        <!-- <td></td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTareas"]),
  },
};
</script>

