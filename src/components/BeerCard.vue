<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  beer: Object as PropType<any>
})

const shortDescription = computed(() => {
  return props.beer.description.length > 180 ? `${props.beer.description.slice(0, 180)} ...` : props.beer.description
})
</script>

<template>
  <v-card>
    <div class="d-flex flex-no-wrap">
      <v-avatar
        class="ma-3"
        size="125"
        rounded="0"
      >
        <v-img :src="props.beer.image ? props.beer.image : 'https://cdn.vuetifyjs.com/images/cards/halcyon.png'"></v-img>
      </v-avatar>

      <div>
        <v-card-title class="text-h5">
          {{ props.beer.name }}
        </v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
          ></v-icon>
        </v-card-subtitle>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>

            <div class="text-grey ms-4">
              4.5 (413)
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • {{props.beer.brewery}}
          </div>

          <div>{{ shortDescription }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn variant="text">
            Listen Now
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<style scoped>

</style>
