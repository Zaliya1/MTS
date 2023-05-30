import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PokemonInfo from "@/views/pokemon-info/pokemon-info.vue";
import PokemonList from "@/views/pokemon-list/pokemon-list.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonList
  },
  {
    path: '/pokemon/:name',
    name: 'pokemon',
    component: PokemonInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
