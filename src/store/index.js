import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
        id: String,
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
    },
    user: null,
    error: {
      tipo: null, 
      mensaje: null
    }
  },
  mutations: {
    setError(state, payload){
      if(payload === null){
        return state.error = { tipo: null, mensaje: null}
      }
      if(payload === "EMAIL_NOT_FOUND"){
        return state.error = { tipo: 'email', mensaje: 'Email not found 📧 🤔'}
      }
      if(payload === "INVALID_PASSWORD"){
        return state.error = { tipo: 'password', mensaje: 'Wrong Password ㊙️ 🤔'}
      }
      if(payload === "EMAIL_EXISTS"){
       return state.error =  { tipo: 'email', mensaje: 'Email already exist 🤨 🤨'}
      }
      if(payload === "INVALID_EMAIL"){
       return state.error =  { tipo: 'email', mensaje: 'Incorrect email format 😡 🤬'}
      }
    },
    setUser(state, payload){
      state.user = payload
    },
    cargar(state, payload){
      state.tareas = payload
    },
    set(state, payload){
      state.tareas.push(payload)
      // localStorage.setItem('tareas', JSON.stringify(state.tareas) )
      // console.log(state.tareas)
    },
    delete(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      // localStorage.setItem('tareas', JSON.stringify(state.tareas) )
      // console.log(state.tarea)
    },
    tarea(state, payload){
      if(!state.tareas.find(tarea => tarea.id === payload )) {
        router.push('/')
        return
      }
      // tarea =  item | tareas = array declarado en el state| no eliminar
      state.tarea = state.tareas.find(tarea => tarea.id === payload )
    },
    // El payload es el objeto modificado
    update(state, payload) {
      state.tareas = state.tareas.map( item => item.id === payload.id ? payload : item)
      router.push('/')
      // localStorage.setItem('tareas', JSON.stringify(state.tareas) )
    }
  },
  
  actions: {
    cerrarSesion({commit}){
      commit('setUser', null)
      router.push('/login')
      localStorage.removeItem('usuario')
    },
    async loginUsuario({commit}, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4j2uR-auatBy1-tqUpEW38_RFoykglYA', {
        method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if (userDB.error) {
          console.log(userDB.error)
          return commit('setError', userDB.error.message)
        }
        commit( 'setUser' ,userDB)
        commit('setError', null)
        router.push('/')
// localStorage guarda la info en JSON
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (e) {
        console.log(`Error: ${e.message}`)
      }
    },
    async registrarUsuario({commit}, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4j2uR-auatBy1-tqUpEW38_RFoykglYA', {
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if (userDB.error){
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', null)
        router.push('/')
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (e) {
        console.log(`Error: ${e.message}`)
      }
    },
    
    async cargarLocalStorage({commit, state }){
      if (localStorage.getItem('usuario')) {
        commit('setuser', JSON.parse(localStorage.getItem('usuario')))
      } else {
        return commit('setUser', null)
      }
      try{
        const res = await fetch(`https://udemy-api-2662a.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
        const dataDB = await res.json()
        const arrayTareas = []
        for(let id in dataDB ){
          arrayTareas.push(dataDB[id])
        }
        commit('cargar', arrayTareas) // ArrarTareas es el payload
      } catch (e) {
        console.log(`Error: ${e.message}`)
      }

    },
    async setTareas({commit, state}, tarea) {
      try {
        const res = await fetch(`https://udemy-api-2662a.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT', 
          headers:{
            'Content-Type' : 'application/json'
          }, 
          body: JSON.stringify(tarea)
        })
        const dataDB  = await res.json()
        console.log(dataDB)
      } catch (e) {
        console.log(`Error: ${e.message}`)
      }

      commit('set', tarea)
    },
    setTarea({commit}, id) {
      commit('tarea', id)
    },
    async deleteTareas({commit, state}, id){
      try{
        // Con delete no se necesita guardar la respuesta en variable
        await fetch(`https://udemy-api-2662a.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE',
          // Con delete no se necesita mandar el Body
          // body: JSON.stringify(tarea)
        })
        // const dataDB = await res.json()
        commit('delete', id)
      } catch (e) {
        console.log(`Error: ${e.message}`)
      }
    },
    async updateTarea({commit, state}, tarea){
      try{
        const res = await fetch(`https://udemy-api-2662a.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
          method: 'PATCH', 
          // headers:{
          //   'Content-Type' : 'application/json'
          // }, 
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()
        commit('update', dataDB) // dataDB es el payload
        console.log(dataDB)
      } catch (e) {
        console.log(`Error: ${e.message}`)
      }
    }
  },
  getters:{
    usuarioAutenticado(state){
      // si user existe retorna true
      // si user no existe retorna false
      //   Esa es la razon de !!
      return !!state.user
    }
  },
  modules: {
  }
})
