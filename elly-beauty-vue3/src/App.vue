<template>
  <div class="aplicacion">
    <header class="encabezado">
      <h1>Elly Beauty MakeUp</h1>

      <nav aria-label="Navegación principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/productos">Productos</RouterLink>
        <RouterLink to="/acerca-de">Acerca de</RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer class="pie">
      <p>Elly Beauty MakeUp - Aplicaciones Web</p>
    </footer>
  </div>
</template>

<style scoped>
.aplicacion {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.encabezado {
  text-align: center;
  padding: 20px;
  background-color: #d63384;
}

.encabezado h1 {
  color: white;
  margin-bottom: 15px;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover,
nav a.router-link-active {
  text-decoration: underline;
}

.pie {
  text-align: center;
  padding: 15px;
  margin-top: auto;
  background-color: #333;
  color: white;
}
</style>