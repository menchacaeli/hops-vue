<script setup lang="ts">
import { ref, watch } from "vue";
import { useBeerStore } from "@/stores/beer";

const beerStore = useBeerStore()
  const params = ref({
    type: null,
    brewery: null,
    })
  const handleSelect = (key: string, value: string | null) => {
    if (!params.value.type && !params.value.brewery) {
      beerStore.getBeers()
    }

    params.value = {...params.value, [key]: value ? value.toLowerCase() : value }
    beerStore.getBeersByFilters(params.value)
  }
</script>

<template>
  <v-card class="beer-filters">
    <v-card-title>
      Filter by
    </v-card-title>
    <div class="beer-filters-container">
      <v-select
        label="Type"
        clearable
        :items="['Apa', 'Lager', 'Ipa', 'Wheat', 'Pilsner', 'Brown Ale', 'Stout', 'Other']"
        @update:modelValue="(type) => handleSelect('type', type)"
      />
      <v-select
        label="Brewery"
        clearable
        :items="['Marble Brewing Company', 'La Cumbre Brewing Company', 'Santa Fe Brewing Company', 'Bosque Brewing Company']"
        @update:modelValue="(brewery) => handleSelect('brewery', brewery)"
      />
    </div>
  </v-card>
</template>

<style scoped>
.beer-filters {
}

.beer-filters-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin: 0 16px;
}
</style>
