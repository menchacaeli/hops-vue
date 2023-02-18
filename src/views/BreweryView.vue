<script setup lang="ts">
import { useBreweryStore } from "@/stores/brewery";
import BreweryCard from "@/components/BreweryCard.vue";

const breweryStore = useBreweryStore()
breweryStore.getBreweries()
</script>

<template>
  <div class="brewery-view">
    <div class="brewery-cards-container">
      <BreweryCard
        v-for="item in breweryStore.breweries"
        :key="item.id"
        :brewery="item"
        class="brewery-card"
      />
    </div>
  </div>
</template>

<style scoped>
.brewery-view {
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-gap: 1em;
}

.brewery-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1em;
}
</style>
