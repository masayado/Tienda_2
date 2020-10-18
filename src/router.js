import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Busquedas = () => import('@/views/Busquedas.vue')
const Ventas = () => import('@/views/Ventas.vue')
const Total = () => import('@/views/Total.vue')
const NotFound = () => import('@/views/NotFound.vue')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busquedas',
            name: 'busquedas',
            component: Busquedas,
        },
        {
            path: '/ventas',
            name: 'ventas',
            component: Ventas,
        },
        {
            path: '/total',
            name: 'total',
            component: Total,
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound,
        },
    ]
})