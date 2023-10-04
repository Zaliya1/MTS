export default {
  getPokemon(id: string | number) {
    return import("./get-pokemon").then(async(m) => await m.default(id))
  },
};
