<script setup>


</script>


<template>

<h1>about</h1>

</template>


<style scoped>


.about-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

.about-header h1 {
  font-size: 2.5rem;
  color: #42b983; /* Vert Vue.js */
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 40px;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-top: 0;
  color: #34495e;
}

.card p, .card li {
  line-height: 1.6;
  color: #555;
  list-style: none;
}

.back-btn {
  display: inline-block;
  padding: 12px 25px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s;
}

.back-btn:hover {
  background-color: #3aa876;
}

a {
  color: red;
  font-family: serif;
  /* color: #42b983; */
  text-decoration: none;
  font-weight: bold;
}
</style>