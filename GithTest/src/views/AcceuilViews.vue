<script setup>

</script>

<template>
  <div class="welcome-container">
    <header class="hero-section">
      <h1 v-if="$route.query.name" class="fade-in">
        <span>Bienvenue,</span> {{ $route.query.name }}
      </h1>
      <h1 v-else class="fade-in">Welcome visitor</h1>

      <div class="separator"></div>

      <h2>Découvrez l'univers de nos catalogues</h2>
      <p class="subtitle">L'élégance et le style à portée de main.</p>
    </header>

    <section class="catalog-preview">
      <div class="card-skeleton">Catalogue Collection</div>
      <div class="card-skeleton">Nouveautés</div>
    </section>

    <div class="action-area">
      <router-link to="/" class="logout-btn" @click="$router.back()">Déconnexion</router-link>
    </div>

  </div>
</template>

<style scoped>
/* Conteneur principal avec un flou léger pour faire ressortir le texte sur l'image de fond */
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  color: white;
  text-align: center;
  padding: 40px 20px;
}

.hero-section {
  max-width: 800px;
  margin-bottom: 50px;
}

h1 {
  font-size: clamp(40px, 8vw, 80px);
  /* Adaptatif selon l'écran */
  font-family: 'Playfair Display', serif;
  /* Un style luxueux si dispo */
  margin-bottom: 10px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

h1 span {
  font-weight: 300;
  display: block;
  font-size: 0.5em;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.separator {
  width: 60px;
  height: 3px;
  background: #66bb6a;
  /* Rappel de ta navbar */
  margin: 20px auto;
}

h2 {
  font-size: clamp(24px, 5vw, 40px);
  font-weight: 300;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.subtitle {
  font-style: italic;
  opacity: 0.7;
  font-size: 1.1rem;
}

/* Grille de catalogues factice pour le look */
.catalog-preview {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.card-skeleton {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 40px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s;
  cursor: pointer;
}

.card-skeleton:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
}

/* Style du bouton Deconnexion */
.logout-btn {
  display: inline-block;
  min-width: 200px;
  padding: 15px 30px;
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 0;
  /* Look luxe : angles droits */
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  transition: all 0.4s ease;
  cursor: pointer;
}

.logout-btn:hover {
  background: white;
  color: #1a1a1a;
}

/* Animation d'entrée */
.fade-in {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>