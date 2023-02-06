import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCollection, useFirestore } from "vuefire";
import { collection } from "firebase/firestore";

const db = useFirestore()
export const useBeerStore = defineStore('beer', {
  state: () => (
    {
      beers: [] as any,
    }
  ),

  actions: {
    getBeers() {
      this.beers  = useCollection(collection(db, 'beers'))
    },
  },
})
