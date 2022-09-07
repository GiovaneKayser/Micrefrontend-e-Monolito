<script setup>
import Sidebar from "./components/Sidebar.vue"
import "./index.css"
import Article from "./components/Article.vue"
import Footer from "./components/Footer.vue"

</script>

<template>
  <Sidebar></Sidebar>
  <main>
    <div class="body">
      <Article></Article>
    </div>
  </main>
  <div class="footer">
    <Footer :select="selectArticle"></Footer>
  </div>
</template>

<style scoped>
</style>
