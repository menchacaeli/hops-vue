import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCollection, useFirestore } from "vuefire";
import { collection, getDocs, query, where } from "firebase/firestore";

const db = useFirestore()
export const useBeerStore = defineStore('beer', {
  state: () => (
    {
      beers: [] as any,
    }
  ),

  actions: {
    async getBeers(): Promise<void> {
      this.beers = useCollection(collection(db, 'beers'))
    },

    async getBeersByFilters(params: { type: string | null, brewery: string | null }): Promise<void> {
      const { type, brewery } = params
      const beersRef = collection(db, "beers");
      let newBeers: any = []
      if (type) {
        const typeQuery = query(beersRef, where("type", "==", type));
        const querySnapshot = await getDocs(typeQuery);
        querySnapshot.forEach((doc) => {
          newBeers.push(doc.data())
        });
      }

      if (brewery) {
        const breweryQuery = query(beersRef, where("brewery", "==", brewery));
        const querySnapshot = await getDocs(breweryQuery);
        querySnapshot.forEach((doc) => {
          newBeers.push(doc.data())
        });
      }

      this.beers = newBeers
    },
  },
})
