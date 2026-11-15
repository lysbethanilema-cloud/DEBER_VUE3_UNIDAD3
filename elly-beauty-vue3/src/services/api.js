const API_URL = 'https://dummyjson.com/products/category/beauty'

export async function obtenerProductos(signal) {
  try {
    const respuesta = await fetch(API_URL, { signal })

    if (!respuesta.ok) {
      throw new Error('Error al obtener los productos')
    }

    const datos = await respuesta.json()

    return datos.products
  } catch (error) {
    throw error
  }
}