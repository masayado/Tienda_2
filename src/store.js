import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    titulo:'32 Bits',
    subtitulo: 'Juegos de PC y Consolas',
    juegos:[
      {
        id: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        id: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        id: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color:"green",
        destacado: true,
      },
      {
        id: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        id: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        id: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
    ventas:[],
  },
  getters: {
    totalJuegos: state =>{
      return state.juegos.length;
    },
    juegosConStock: state =>{
      return state.juegos.filter((juego)=>{
        return juego.stock > 0
      })
    },
    juegoDisponiblePorId: (state, getters) => (id)=>{
      return getters.juegosConStock.filter((juego)=>{
      return juego.id == id
      })
      },
    ventasRealizadas: state=>{
      return state.ventas.length
    },
    sumaStockTotal: state=>{
      return state.juegos.reduce((acc, juego) => acc += parseInt(juego.stock),0)
     },
  },
  mutations: {},
  actions: {}
});

export default store;
