<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { obtenerProductos } from '../services/api.js'
import ProductoCard from '../components/ProductoCard.vue'

const productos = ref([])
const productoSeleccionado = ref(null)

function verDetalles(producto) {
  productoSeleccionado.value = producto
}
function cerrarDetalles() {
  productoSeleccionado.value = null
}
const busqueda = ref('')

const productosFiltrados = computed(() => {
  return productos.value.filter(producto =>
    producto.title.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})
const cargando = ref(true)
const error = ref('')
const controlador = new AbortController()

async function cargarProductos() {
  try {
    cargando.value = true
    error.value = ''

    productos.value = await obtenerProductos(controlador.signal)
  } catch (err) {
    if (err.name !== 'AbortError') {
      error.value = 'No se pudieron cargar los productos.'
    }
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  cargarProductos()
})

onUnmounted(() => {
  controlador.abort()
})
</script>

<template>
  <main class="contenedor">
    <h1>Elly Beauty MakeUp</h1>
    <p>Bienvenidos a nuestra tienda de belleza</p>
    <form class="formulario" @submit.prevent>
  <label for="buscar">Buscar productos:</label>

  <input
    id="buscar"
    v-model="busqueda"
    type="search"
    placeholder="Escribe el nombre del producto"
  />
</form>

    <p v-if="cargando">Cargando productos...</p>

    <p v-else-if="error">{{ error }}</p>

    <p v-else-if="productos.length === 0">
      No hay productos disponibles.
    </p>
    <p v-else-if="productosFiltrados.length === 0">
      No se encontraron productos con ese nombre.
    </p>

    <section v-else class="productos">
      <ProductoCard
  v-for="producto in productosFiltrados"
  :key="producto.id"
  :producto="producto"
  @ver-detalles="verDetalles"
/>
    </section>
    <section v-if="productoSeleccionado" class="detalle">
  <h2>Detalles del producto</h2>

  <h3>{{ productoSeleccionado.title }}</h3>

  <p>{{ productoSeleccionado.description }}</p>

  <p>Precio: ${{ productoSeleccionado.price }}</p>

  <button @click="cerrarDetalles">
    Cerrar detalles
  </button>
</section>
  </main>
</template>

<style scoped>
.contenedor {
  padding: 30px;
  text-align: center;
}

h1 {
  color: #d63384;
}

.productos {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 220px), 1fr)
  );
  gap: 20px;
  margin-top: 30px;
}

.tarjeta {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.tarjeta img {
  width: 100%;
  height: 180px;
  object-fit: contain;
}
.formulario {
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.formulario input {
  padding: 12px;
  width: 100%;
  max-width: 350px;
  border: 1px solid #d63384;
  border-radius: 8px;
  font-size: 16px;
}
.detalle {
  margin: 30px auto;
  padding: 20px;
  max-width: 500px;
  border: 2px solid #d63384;
  border-radius: 12px;
  text-align: center;
}

.detalle h2 {
  color: #d63384;
}

.detalle button {
  background-color: #d63384;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
</style>