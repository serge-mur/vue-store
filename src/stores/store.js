import {defineStore} from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { BASE_URL } from '@/constants/api'

export const useStore = defineStore('store', () => {
  const products = ref([])

  const getProducts = async() => {
    try {
        const { data } = await axios.get(`${BASE_URL}api/content/items/products`)
        products.value = data
        console.log(products)
    } catch(e) {
        console.log(e)
    }
  }

  return { products, getProducts } 
})
