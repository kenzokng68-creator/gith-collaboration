<script setup></script>

<template>
<div>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'acceuil'}">Acceuil</router-link>
    <router-link :to="{name: 'about'}">About Us</router-link>
  </nav>
</div>
<main>
  <router-view/>
</main>
</template>

<style scoped></style>
