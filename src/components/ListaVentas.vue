<template>
    <div class="tabla">
        <table class="tg">
            <thead>
                <tr>
                    <th class="tg-0pky">Codigo</th>
                    <th class="tg-0pky">Nombre</th>
                    <th class="tg-0pky">Stock</th>
                    <th class="tg-0pky">Precio</th>
                    <th class="tg-0pky">Vender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="juego in juegos" :key="juego.id">
                    <td class="tg-0pky" :style="{background: juego.color}">{{juego.id}}</td>
                    <td class="tg-0pky" :style="{background: juego.color}">{{juego.nombre}}</td>
                    <td class="tg-0pky" :style="{background: juego.color}">{{juego.stock}}</td>
                    <td class="tg-0pky" :style="{background: juego.color}">{{juego.precio}}</td>
                    <td class="tg-0pky" :style="{background: juego.color}"><button @click="vender(juego)">Vender</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'listaventas-component',
    props: {
        juegos:{
            type:Array,
            required:true,
        },
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['vender'])
    },
    //components: {},
}
</script>

<style scoped>

    .tabla{
        display:flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom:50px;
    }

    .tg{
        border-collapse:collapse;
        border-spacing:0;
        }
    .tg td{
        border-color:black;
        border-style:solid;
        border-width:1px;
        font-size:16px;
        overflow:hidden;
        padding:10px 5px;
        word-break:normal;
        }

    .tg th{
        border-color:black;
        border-style:solid;
        border-width:1px;
        font-size:16px;
        font-weight:normal;
        overflow:hidden;
        padding:10px 5px;
        word-break:normal;
        }

    .tg .tg-0pky{
        border-color:inherit;
        text-align:left;
        vertical-align:top
        }
    
</style>