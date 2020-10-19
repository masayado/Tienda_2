<template>
    <div>
        <h1>Ventas</h1>
        <p><b>Cantidad de juegos con Stock:</b> {{totalJuegos}}</p>
        <div class="tabla">
            <lista-venta :juegos="juegosConStock"></lista-venta>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import ListaVentas from '@/components/ListaVentas.vue'
export default {
    name: 'ventas-vista',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['juegos']),
        ...mapGetters(['totalJuegos', 'juegosConStock', 'sumaStockTotal']),
    },
    methods: {
        // -- Metodos
    },
    components: {
        'lista-venta':ListaVentas,
    },
}
</script>

<style scoped>
p{
    text-align:center;
}
</style>