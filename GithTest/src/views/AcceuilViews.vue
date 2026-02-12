<script setup>
import { ref } from 'vue'

const features = ref([
  { id: 1, title: "Rapide", desc: "Application optimisée et performante." },
  { id: 2, title: "Moderne", desc: "Design propre et responsive." },
  { id: 3, title: "Sécurisée", desc: "Structure prête pour l'authentification." }
])
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Bienvenue sur ton projet Vue</h1>
      <p>Construis quelque chose de puissant et élégant.</p>
      <button class="cta">Commencer</button>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div 
        v-for="feature in features" 
        :key="feature.id" 
        class="card"
      >
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #2c2c54);
  color: white;
  padding: 40px 20px;
}

/* Hero */
.hero {
  text-align: center;
  margin-bottom: 60px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 25px;
}

.cta {
  padding: 12px 28px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: #ff6b35;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
}

.cta:hover {
  background: #ff8c5a;
  transform: translateY(-3px);
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.card {
  background: rgba(255, 255, 255, 0.08);
  padding: 25px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.15);
}

.card h3 {
  margin-bottom: 10px;
  color: #ff6b35;
}

.card p {
  opacity: 0.85;
}
</style>
