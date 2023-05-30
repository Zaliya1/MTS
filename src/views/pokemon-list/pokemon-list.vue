<template>
  <div class="pokemon-list">
    pokemon-list

  <ul class="pokemons">
<!--    <router-link-->
<!--        v-for="pokemon in pokemonList"-->
<!--        :key="pokemon.name"-->
<!--        :to="`pokemon/${pokemon.name}`">-->
<!--      <pokemon-item-->
<!--          :pokemon="pokemon"-->
<!--      />-->
<!--    </router-link>-->
    <pokemon-item
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        :pokemon="pokemon"
        @click="handleClick"
    />
  </ul>
  </div>
</template>

<script lang="ts" src="./pokemon-list.ts"></script>
<style src="./pokemon-list.css"></style>
