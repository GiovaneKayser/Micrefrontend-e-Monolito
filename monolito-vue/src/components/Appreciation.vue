<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
function handleArticle(article) {
  console.log("estou aqui", article);
  dispatchEvent(new CustomEvent('@Giovane/appreciation/todo/setArticle', { detail: article }))
}
</script>
<template>
  <div className="appreciation">
    <img :src="article.img" height="48" width="48" />
    <br />
    <span>{{ article.title }}</span><br />
    <button  @click="handleArticle(article)">
      Ler mais
    </button>
  </div>
</template>
