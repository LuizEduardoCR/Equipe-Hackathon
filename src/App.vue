<script setup>
</script>

<template>
  <header>
   <div>
    <h1>Pagina Inicial</h1>
   </div>

    <div>
    
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/membro1">Membro1</RouterLink>
        <RouterLink to="/Francisco">Francisco</RouterLink>
        <RouterLink to="/membro3">Membro3</RouterLink>
        <RouterLink to="/membro4">Membro4</RouterLink>
        <RouterLink to="/membro5">Membro5</RouterLink>
        <RouterLink to="/membro6">Membro6</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
