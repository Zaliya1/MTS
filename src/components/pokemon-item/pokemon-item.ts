import {Component, Vue, Prop} from "vue-property-decorator";

import {PokemonType} from "types";

@Component
export default class PokemonItem extends Vue {
    @Prop({type: Object, required: true}) pokemon: PokemonType;
}
