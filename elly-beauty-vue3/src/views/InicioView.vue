<template>
  <main class="inicio">
    <h1>Bienvenidos a Elly Beauty MakeUp</h1>

    <p>
      Descubre nuestra colección de productos
      de maquillaje y belleza.
    </p>

    <RouterLink to="/productos" class="boton">
      Ver productos
    </RouterLink>
  </main>
</template>

<style scoped>
.inicio {
  text-align: center;
  padding: 60px 20px;
}

h1 {
  color: #d63384;
  font-size: 32px;
}

p {
  font-size: 18px;
  margin: 20px 0;
}

.boton {
  display: inline-block;
  background-color: #d63384;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
}

.boton:hover {
  background-color: #ad2167;
}
</style>