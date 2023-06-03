import Vue from "vue";
// @ts-ignore
import Vuex, {StoreOptions} from "vuex"
Vue.use(Vuex);

import {PokemonType} from "types";

export interface RootState {
    pokemons: PokemonType[] | [];
}

const store: StoreOptions<RootState> = {
    state: {
        pokemons: [],
    },
    actions: {
        actionPokemons(context: any, pokemons: PokemonType[]) {
            console.log('action')
            context.commit('mutatePokemons', pokemons)
        }
    },
    mutations: {
        mutatePokemons(state, pokemons: PokemonType[]) {
            state.pokemons = pokemons;
            console.log(state.pokemons)
        },
    }
}

export default new Vuex.Store<RootState>(store);
