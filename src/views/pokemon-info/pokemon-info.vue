<template>
  <div class="pokemon-info">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.img" alt="icon">
  </div>
</template>

<script lang="ts" src="./pokemon-info.ts"></script>
<style src="./pokemon-info.css"></style>
