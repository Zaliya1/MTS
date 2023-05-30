import {Component, Vue} from "vue-property-decorator";
import PokemonItem from "@/components/pokemon-item/pokemon-item.vue";
import axios from "axios";

import { Pokemon } from "@/components/pokemon-item/pokemon-item";

@Component({
    components: {
        PokemonItem,
    }
})
export default class PokemonList extends Vue {
    pokemonList: Pokemon[] | [] = [];
    limit: Number = 5;
    error: string;
    isLoading: boolean = true;

    mounted() {
        this.getPokemons()
    }

    getPokemons():void {
        this.isLoading = true;
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`)
            .then((res) => {
                // this.pokemonList = res.data.results;
                this.pokemonList = res.data.results.map((i: any) => {
                    let id = i.url.split('/')[6];
                    return { id, ...i }
                })
                this.isLoading = false;
            })
            .catch((e) => {
                this.error = e;
                this.isLoading = false;
            })
    }

    handleClick(id: number):void {
        this.$router.push(`pokemon/${id}`)
    }
}
