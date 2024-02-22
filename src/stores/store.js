import {defineStore} from 'pinia'
import axios from 'axios'
import { ref, reactive, computed } from 'vue'
import { BASE_URL } from '@/constants/api'

export const useStore = defineStore('store', () => {
  const products = ref([])
  const filters = reactive({
    sort: 'name',
    search: ''
  })

  const cart = ref([])

  const totalCost = computed(() => {
    let sum = 0
    cart.value.forEach((item) => sum += item.price)
    return sum
  })

  const addToCart = (id) => {
    const item = products.value.find(el => el.id == id)
    cart.value.push(item)
  }

  const delFromCart = (cartId) => {
    cart.value.splice(cartId, 1)
  }

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

  return { products, filters, getProducts, cart, addToCart, delFromCart, totalCost } 
})
