<template>
<div>
    <div class="ventasregistradas">
    <h1>Total Ventas</h1>
    Ventas registradas: {{ventasRealizadas}}
    </div>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
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
    },
}
</script>

<style scoped>

.ventasregistradas{
    text-align:center;
}
    
</style>