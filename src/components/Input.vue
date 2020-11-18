<template>
  <input
    type="text"
    class="my-4 form-control"
    placeholder="Type a name"
    v-model.trim="tarea.nombre"
  />

  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-1"
      class="form-check-input"
      v-model="tarea.categorias"
      value="Javascript"
    />
    <label for="check-1" class="form-check-label">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="node js"
    />
    <label for="check-2" class="form-check-label">Node.js</label>
  </div>
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radio1"
        value="urgente"
        v-model="tarea.estado"
      />
      <label class="form-check-label" for="radio1">high Priority</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radio2"
        value="relax"
        v-model="tarea.estado"
      />
      <label class="form-check-label" for="radio2">Low Priority</label>
    </div>
  </div>
  <div class="mt-2">
    <input
      class="form-control"
      type="text"
      name=""
      id=""
      v-model.number="tarea.numero"
    />
  </div>
  <button
    class="btn btn-dark my-5 btn-block"
    type="submit"
    :disabled="botonDisabled"
  >
    Submit
  </button>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  computed: {
    botonDisabled() {
      if (this.tarea.nombre.trim() === "") {
        return true;
      }
      return false;
    },
  },
};
</script>

