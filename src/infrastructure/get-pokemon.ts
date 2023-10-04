import axios from "axios";

export default async function getPokemon(id: number | string = '5'): Promise<any> {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.data)
        .catch(e => e);

    return response;
}
