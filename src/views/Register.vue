<template>
  <h1 class="my-5 text-center">Users Register</h1>
  <div class="alert alert-danger" v-if="error.tipo !== null">
    {{ error.mensaje }}
  </div>
  <form @submit.prevent="procesarFormulario">
    <input
      type="email"
      placeholder="email"
      class="form-control my-2"
      v-model.trim="email"
      :class="[error.tipo === 'email' ? 'is-invalid' : '']"
    />
    <input
      type="password"
      placeholder="password"
      class="form-control my-2"
      v-model.trim="pass1"
    />
    <input
      type="password"
      placeholder="password"
      class="form-control my-2"
      v-model.trim="pass2"
    />
    <!-- <div class="align-items-center"> -->
    <button
      type="submit"
      class="btn btn-primary btn-lg text-center my-4"
      :disabled="bloquear"
    >
      Register
    </button>
    <!-- </div> -->
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
      // disabled: false,
    };
  },
  computed: {
    bloquear() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.pass1.length > 5 && this.pass1 === this.pass2) {
        return false;
      }
      return true;
    },
    ...mapState(["error"]),
  },
  methods: {
    ...mapActions(["registrarUsuario"]),
    async procesarFormulario() {
      await this.registrarUsuario({ email: this.email, password: this.pass1 });
      if (this.error.tipo !== null) {
        return;
      }
      this.email = "";
      this.pass1 = "";
      this.pass2 = "";
    },
  },
};
</script>

<style scoped>
/* button {
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>