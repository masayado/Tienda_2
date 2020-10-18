<template>
    <div>
        <h1>Búsqueda</h1>
        <div class="input">
            <search-juegos @buscar="search"></search-juegos>
        </div>
        <br>
        <div class="lista_juegos">
            <lista-juegos :juegos="juegosConFiltro" :totalJuegos="totalJuegos" :sumaStockTotal="sumaStockTotal"></lista-juegos>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import ListFiltro from '@/components/ListFiltro.vue'
import List from '@/components/List.vue'
export default {
    name: 'busquedas',
    //props: {},
    data: function(){
        return {
            search_id:'',
        }
    },
    computed: {
        ...mapState(['juegos']),
        ...mapGetters(['totalJuegos', 'juegosConStock', 'sumaStockTotal']),
        juegosConFiltro(){
        //    if(this.search_id === '')return this.juegosConStock
        //    return this.juegosConStock.filter((juego)=>juego.id === this.search_id)
        return this.juegosConStock.filter((juego)=> juego.id.includes(this.search_id))
        }
    },
    methods: {
        search(e){
            this.search_id = e.search_id;
        }
    },
    components: {
        'lista-juegos':List,
        'search-juegos':ListFiltro,
    },
}
</script>

<style scoped>

.lista_juegos{
    display:flex;
    justify-content: center;
}
    
</style>