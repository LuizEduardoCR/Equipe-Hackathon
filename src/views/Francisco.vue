<script setup>
</script>

<template>
    <header>
        <div>
            <div>
                <h1>Pagina Membro 2 - Francisco Vargas Neto</h1>
            </div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/membro1">Membro1</RouterLink>
                <RouterLink to="/membro2">Francisco</RouterLink>
                <RouterLink to="/membro3">Membro3</RouterLink>
                <RouterLink to="/membro4">Membro4</RouterLink>
                <RouterLink to="/membro5">Membro5</RouterLink>
                <RouterLink to="/membro6">Membro6</RouterLink>

            </nav>
        </div>


        <main>
            <h2>Óla eu sou Francisco Vargas Neto</h2>
             <p>Tenho 17 anos, moro em Araquari SC, estou no segundo ano do ensino médio no Instituto Federal Catarinense.</p>
                <p>Escolhi o curso técnico em informática para internet pois me indentifico muito com o curso e quero levar a área como minha profissão.</p>
                <p>Atualmente não faço parte de nenhum projeto extracurricular. </p>
             
        </main>
    </header>

    <RouterView />
</template>

<style scoped></style>
