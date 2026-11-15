<script setup>
const { producto } = defineProps({
  producto: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['ver-detalles'])

function mostrarDetalles() {
  emit('ver-detalles', producto)
}
</script>

<template>
  <article class="tarjeta">
    <img
      :src="producto.thumbnail"
      :alt="producto.title"
    />

    <h2>{{ producto.title }}</h2>

    <p>Precio: ${{ producto.price }}</p>
    <button type="button" @click="mostrarDetalles">
     Ver detalles
    </button>
  </article>
</template>

<style scoped>
.tarjeta {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
}

.tarjeta img {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

.tarjeta h2 {
  font-size: 20px;
  margin-top: 10px;
}
button {
    background-color: blue;
    color: white;
    border: greenyellow;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
}
button:hover {
    background-color: #ad2167;
}
</style>