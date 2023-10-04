import {Component, Vue } from "vue-property-decorator";
import {adapterPokemon} from "@/adapters";
import {BCard, BCardText, BButton} from "bootstrap-vue";
import infrastructure from "@/infrastructure";

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

    getPokemon() {
        this.isLoading = true;
        infrastructure.getPokemon(this.idPokemon)
            .then((res) => {
                this.pokemon = adapterPokemon(res);
                this.isLoading = false;
            })
            .catch((e: any) => {
                this.error = e;
                this.isLoading = false;
            })
    }
}
