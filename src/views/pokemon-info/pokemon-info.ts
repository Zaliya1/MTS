import {Component, Vue } from "vue-property-decorator";
import axios from "axios";
import {BCard, BCardText, BButton} from "bootstrap-vue";

export type PokemonInfoType = {
    name: string;
    height: string | number;
    weight: string | number;
    img: string;
}

@Component({
    components: {
        BCard, BCardText, BButton
    }
})
export default class PokemonInfo extends Vue {
    isLoading: boolean = false;
    pokemon: PokemonInfoType = {
        name: '',
        height: '',
        weight: '',
        img: '',
    };
    error: string;
    idPokemon: number | string;

    mounted() {
        this.idPokemon = this.$route.params.id;
        this.getPokemon()
    }

    getPokemon():void {
        this.isLoading = true;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemon}`)
            .then((res) => {
                this.pokemon = {
                    name: res.data.name,
                    height: res.data.height,
                    weight: res.data.weight,
                    img: res.data.sprites.front_default
                };
                this.isLoading = false;
            })
            .catch((e) => {
                this.error = e;
                this.isLoading = false;
            })
    }
}
