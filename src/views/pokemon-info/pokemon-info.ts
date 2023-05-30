import {Component, Vue } from "vue-property-decorator";
import axios from "axios";

export type PokemonInfoType = {
    name: string;
    type: any;
    height: string | number;
    weight: string | number;
    img: string;
}

@Component
export default class PokemonInfo extends Vue {
    isLoading: boolean = false;
    pokemon: PokemonInfoType = {
        name: '',
        type: '',
        height: '',
        weight: '',
        img: '',
    };
    error: string;
    idPokemon: number;

    mounted() {
        this.idPokemon = 5;
        this.getPokemon()
    }

    getPokemon():void {
        this.isLoading = true;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemon}`)
            .then((res) => {
                this.pokemon = {
                    name: res.data.name,
                    type: res.data.types,
                    height: res.data.height,
                    weight: res.data.weight,
                    img: res.data.sprites.front_default
                };
                console.log(this.pokemon)
                this.isLoading = false;
            })
            .catch((e) => {
                this.error = e;
                this.isLoading = false;
            })
    }
}
