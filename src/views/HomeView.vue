<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useBeerStore } from "@/stores/beer";

const beerStore = useBeerStore()
console.log(beerStore.getBeers())
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
