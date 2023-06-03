<template>
  <div class="pokemon-info">
    <h3  class="pokemon-info__heading">Дополнительная информация</h3>
    <b-card
        :title="pokemon.name"
        :img-src="pokemon.img"
        :img-alt="`Картинка ${pokemon.name}`"
        img-left
        class="pokemon-info__card"
    >
      <b-card-text>
        Высота данного покемона составляет {{ pokemon.height }} см
      </b-card-text>
      <b-card-text>
        Ширина данного покемона составляет {{ pokemon.weight }} см
      </b-card-text>
    </b-card>
    <router-link to="/">
      <b-button pill variant="primary">Назад</b-button>
    </router-link>
  </div>
</template>

<script lang="ts" src="./pokemon-info.ts"></script>
<style src="./pokemon-info.css"></style>
