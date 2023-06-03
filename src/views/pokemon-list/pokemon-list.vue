<template>
  <div class="pokemon-list">
    <h1>Покемоны</h1>
    <b-list-group class="pokemon-list__group">
      <pokemon-item
          v-for="pokemon in slicePokemons"
          :key="pokemon.name"
          :pokemon="pokemon"
          @click="handleClick"
      />
    </b-list-group>

    <div class="pokemon-list__pagination">
      <b-pagination
          v-model="paging.current"
          :per-page="paging.limit"
          :total-rows="pokemonList.length"
          size="lg"
      />
      <b-form-select v-model="paging.limit" :options="[5, 10, 20]" class="select" />
    </div>

  </div>
</template>

<script lang="ts" src="./pokemon-list.ts"></script>
<style src="./pokemon-list.css"></style>
