import { useEffect, useState } from 'react'
import getProducts from '../services/product.service'

const useProducts = () => {
  const [preferences, setPreferences] = useState([])
  const [features, setFeatures] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const allProducts = await getProducts()
        setProducts(allProducts)

        const collectedPreferences = []
        const collectedFeatures = []

        allProducts.forEach(product => {
          const randomPreferences = product.preferences
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
          const randomFeatures = product.features
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)

          collectedPreferences.push(...randomPreferences)
          collectedFeatures.push(...randomFeatures)
        })

        setPreferences(collectedPreferences)
        setFeatures(collectedFeatures)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error)
      }
    }

    fetchProducts()
  }, [])

  return { preferences, features, products }
}

export default useProducts
