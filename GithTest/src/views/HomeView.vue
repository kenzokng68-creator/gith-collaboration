<script setup>
// import { useRouter } from 'vue-router';
// import { isAuthenticated } from '@/services/authServices';

// const router = useRouter();

// const startExperience = () => {
//   if (isAuthenticated()) {
//     router.push('/about'); // Déjà connecté ? On l'envoie sur le contenu
//   } else {
//     router.push('/login'); // Sinon, direction le formulaire
//   }
// };


</script>

<template>
  <div class="home-wrapper">
    <div class="hero-section">
      <div class="logo-circle">🚀</div>
      <h1>Bienvenue sur EmployeeManager</h1>
      <p>La solution interne pour la gestion simplifiée de vos équipes.</p>
      
      <button @click="startExperience" class="cta-button">
        Accéder à mon espace
      </button>
    </div>

    <div class="features-preview">
      <div class="feature">
        <span>🔒</span>
        <p>Espace Sécurisé</p>
      </div>
      <div class="feature">
        <span>👥</span>
        <p>Gestion d'Équipe</p>
      </div>
      <div class="feature">
        <span>⚡</span>
        <p>Accès Rapide</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
  margin: 20px;
}

.logo-circle {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #5d6d7e;
  font-size: 1.2rem;
  max-width: 500px;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

.cta-button:hover {
  background-color: #3aa876;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.4);
}

.features-preview {
  display: flex;
  gap: 30px;
  margin-top: 50px;
}

.feature {
  background: rgba(255, 255, 255, 0.5);
  padding: 15px 25px;
  border-radius: 15px;
  font-weight: 500;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
</style>
