<template>
    <div>
    <h1 v-text="notfound"></h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'notfound404',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['notfound'])
    },
    methods: {
        // -- Metodos
    },
    //components: {},
}
</script>

<style scoped>

h1{
    margin-top:50px;
}
    
</style>