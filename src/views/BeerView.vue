<script setup lang="ts">
import { useBeerStore } from "@/stores/beer";
import BeerCard from '../components/BeerCard.vue'
import BeerFilter from "@/views/beer/BeerFilter.vue";

const beerStore = useBeerStore()
beerStore.getBeers(null)
</script>

<template>
  <div class="beer-view">
    <BeerFilter/>
    <div class="beer-cards-container">
      <BeerCard
        v-for="item in beerStore.beers"
        :key="item.id"
        :beer="item"
        class="beer-card"
      />
    </div>
  </div>
</template>

<style scoped>
.beer-view {
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-gap: 1em;
}

.beer-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1em;
}
</style>
