<template>
  <b-list-group-item class="pokemon-item" @click="$emit('click', pokemon.id)">
    {{pokemon.name}}
  </b-list-group-item>
</template>

<script lang="ts" src="./pokemon-item.ts"></script>
<style src="./pokemon-item.css"></style>
