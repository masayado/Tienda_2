<template>
  <div id="app">
    <div class="header">
      <img alt="logo" src="./assets/logo.png">
    </div>
    <nav>
        <router-link :to="{name: 'inicio'}">Inicio</router-link>
        <router-link :to="{name: 'busquedas'}">Búsquedas</router-link>
        <router-link :to="{name: 'ventas'}">Ventas</router-link>
        <router-link :to="{name: 'total'}">Total</router-link>
    </nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>

body{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
.header{
  text-align: center;
}

h1, h2{
  text-align:center;
}

nav{
  width: 100%;
  height:75px;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000;
}

nav a{
  color: #fff;
  text-decoration: none;
}

a:hover{
  color:lightgreen;
}
</style>
