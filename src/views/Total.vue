<template>
<div>
    <h1>Total Ventas</h1>
    <p>Ventas registradas: {{ventasRealizadas}}</p>
    
    <div class="lista_ventas">
        <ventas-total :ventas="ventas" :sumaVentasTotal="sumaVentasTotal"></ventas-total>
    </div>

    <p>Suma total de ventas: ${{sumaVentasTotal}}</p>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import VentasTotal from '@/components/VentasTotal.vue'
export default {
    name: 'totalvista',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['juegos', 'ventas']),
        ...mapGetters(['totalJuegos', 'juegosConStock', 'ventasRealizadas', 'sumaVentasTotal']),
    },
    methods: {
        ...mapActions(['registrarVenta']),
    },
    components: {
        'ventas-total':VentasTotal,
    },
}
</script>

<style scoped>

.lista_ventas{
    display:flex;
    align-items: center;
    flex-direction: column;
    text-align: left;
}

h1, p{
    text-align:center;
}

</style>