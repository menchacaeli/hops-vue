import { defineStore } from 'pinia'
import { useCollection, useFirestore } from "vuefire";
import { collection } from "firebase/firestore";

const db = useFirestore()
export const useBreweryStore = defineStore('brewery', {
  state: () => (
    {
      breweries: [] as any,
    }
  ),

  actions: {
    async getBreweries(): Promise<void> {
      this.breweries = useCollection(collection(db, 'breweries'))
    },
  },
})
