<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const theme = ref('dark')
const handleToggleTheme = () => theme.value = theme.value === 'light' ? 'dark' : 'light'
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar title="vue-beer">
      <v-spacer />
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="handleToggleTheme"
      >Toggle Theme</v-btn>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item to="/" title="Dashboard"></v-list-item>
        <v-list-item to="/beer" title="Beer"></v-list-item>
        <v-list-item to="/brewery" title="Breweries"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
