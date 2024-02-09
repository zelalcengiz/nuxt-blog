<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404" class="animated fadeIn">Oops! Page not found</h1>
    <p v-else class="animated fadeIn">Something went wrong</p>
    <p class="error-details animated fadeIn">{{ error.message }}</p>
    <p v-if="error.statusCode === 404" class="animated fadeIn">It seems like the page you're looking for doesn't exist. You might have typed the URL incorrectly or the page has been removed.</p>
    <p v-else class="animated fadeIn">There seems to be an issue with our server. We apologize for the inconvenience. Our team is working on it.</p>
    <NuxtLink to="/" class="back-link animated fadeIn">Go back to home</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';

.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
  color: #333;
}

.error-details {
  color: #888;
  margin-top: 1em;
}

.back-link {
  margin-top: 2em;
  color: #2196f3;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #2196f3;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background-color: #2196f3;
  color: #fff;
}
</style>
