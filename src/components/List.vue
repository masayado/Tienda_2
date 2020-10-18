<template>
    <div>
        <div class="busqueda">
            <hr>
                <p>Cantidad de juegos disponibles: {{totalJuegos}}</p>
                <p>Stock total: {{sumaStockTotal}}</p>
            <hr>
        </div>
        <div class="lista">
            <ul>
                <li v-for="juego in juegos" :key="juego.id">
                     <span class="lista_juegos" :style="{background: juego.color}">
                        {{juego.id}} |
                        {{juego.nombre}} |
                        {{juego.stock}} |
                        {{juego.precio}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'listajuegos-component',
    props: {
        juegos:{
            type:Array,
            required:true,
        },
        totalJuegos:{},
        sumaStockTotal:{},
    },
    data: function(){
        return {
            search:'',
        }
    },
    computed: {
    },
    methods: {
    },
    //components: {},
}
</script>

<style scoped>

input{
    margin-bottom: 10px;
}

p{
    text-align: center;
}
    
</style>