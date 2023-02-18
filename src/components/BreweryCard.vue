<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  brewery: Object as PropType<any>
})

</script>

<template>
  <v-card>
    <div class="card-content-container">
      <v-avatar
        class="ma-3"
        size="125"
        rounded="0"
      >
        <v-img :src="props.brewery.image ? props.brewery.image : 'https://cdn.vuetifyjs.com/images/cards/halcyon.png'"></v-img>
      </v-avatar>

      <div>
        <v-card-title class="text-h5">
          {{ props.brewery.name }}
        </v-card-title>

        <v-card-subtitle class="text-overline">
          {{props.brewery.website}} • {{props.brewery.phone}}
        </v-card-subtitle>

        <v-card-text>
          {{ props.brewery.address }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <div>
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
          </div>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-content-container {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 16px;
}
</style>
