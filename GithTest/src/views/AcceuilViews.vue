<template>
  <div class="accueil">
    <section class="hero">
      <h1>Bienvenue sur <span class="accent">Mon Projet</span></h1>
      <p>L'endroit où les idées prennent vie (et où le code compile du premier coup).</p>
      
      <div class="actions">
        <button @click="explorer" class="btn-primary">Explorer</button>
        <button @click="enSavoirPlus" class="btn-secondary">En savoir plus</button>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pas besoin de fioritures, on va droit au but
const explorer = () => {
  console.log("C'est parti pour l'aventure !");
};

const enSavoirPlus = () => {
  alert("C'est une super application faite avec Vue 3 !");
};
</script>

<style scoped>
.accueil {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.accent {
  color: #42b983; /* Le beau vert de Vue */
}

.hero p {
  font-size: 1.2rem;
  color: #5d6d7e;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.8rem 2rem;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}

button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.btn-primary {
  background-color: #42b983;
  color: white;
}

.btn-secondary {
  background-color: #34495e;
  color: white;
}
</style>
