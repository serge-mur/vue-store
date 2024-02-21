import {defineStore} from 'pinia'
import axios from 'axios'
import { ref, reactive } from 'vue'
import { BASE_URL } from '@/constants/api'

export const useStore = defineStore('store', () => {
  const products = ref([])
  const filters = reactive({
    sort: 'name',
    search: ''
  })

  const getProducts = async() => {
    try {
      const { data } = await axios.get(`${BASE_URL}api/content/items/products`, {
        params: {
          sort: `{${filters.sort}: 1}`,
          filter: `{name: {$regex: '${filters.search}'}}`
        }          
      })
      products.value = data
    } catch(error) {
        console.log(error)
    }
  }

  return { products, filters, getProducts } 
})
