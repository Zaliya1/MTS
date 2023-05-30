<template>
  <li class="pokemon-item" @click="$emit('click', pokemon.id)">
      <h3>{{pokemon.name}}</h3>
  </li>
</template>

<script lang="ts" src="./pokemon-item.ts"></script>
<style src="./pokemon-item.css"></style>
