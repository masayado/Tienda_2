<template>
   <div>
        <ul>
            <li v-for="venta in ventas" :key="venta.codigo">
            <div>Codigo:{{venta.codigo}} | Nombre:{{venta.nombre}} | Precio: ${{venta.precio}}</div>
            </li>
        </ul>
   </div>
</template>

<script>
export default {
    name: 'ventastotal-component',
    props: {
        juegosConStock:{
            type:Array,
        },
        ventas:{},
        sumaVentasTotal:{},
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    //components: {},
}
</script>

<style scoped>
    
</style>