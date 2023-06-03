import {Component, Vue, Prop} from "vue-property-decorator";

export type Pokemon = {
    name: string;
    url: string;
    id: number;
}

@Component
export default class PokemonItem extends Vue {
    @Prop({type: Object, required: true}) pokemon: Pokemon;
}
