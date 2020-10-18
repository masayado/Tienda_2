<template>
    <div>
        <div class="form">
        <input type="text" placeholder="Ingresa código" v-model="search" @change="buscar">
        <button @click.prevent="buscar">Buscar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'input_filtro',
    // props: {},
    data: function(){
        return {
            search:'',
        }
    },
    // computed: {},
    methods: {
        buscar(){
            this.$emit("buscar",{
                search_id:this.search,
            })
        }
    },
    //components: {},
}
</script>

<style scoped>
    .form{
        text-align: center;
    }
</style>