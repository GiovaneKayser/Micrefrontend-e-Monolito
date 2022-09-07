<script setup>
function setColor(color) {
document.getElementById("article-paragraph").style.color = color;
}
function setSize(size) {
document.getElementById("article-paragraph").style.fontSize = size;
}

</script>
<template>

  <aside class="side">
    <div class="logo" style="justify-content:space-evenly;display:flex">
      <img src="favicon.ico" alt="" height="48" width="48">
      <img src="favicon-vue.ico" alt="" height="48" width="48">
    </div>
    <h4>Microfrontend</h4>
    <h4>React - Vue</h4>
    <hr />
    <h4>Cor da fonte</h4>
    <li style="color:red" @click="setColor('red')">Vermelho</li>
    <li style="color:black" @click="setColor('black')">Preto</li>
    <li style="color:blue" @click="setColor('blue')">Azul</li>
    <li style="color:yellow" @click="setColor('yellow')">Amarelo</li>
    <hr />
    <h4>Tamanho da fonte</h4>
    <li style="fontSize:8px" @click="setSize('8px')">8px</li>
    <li style="fontSize:12px" @click="setSize('12px')">12px</li>
    <li style="fontSize:16px" @click="setSize('16px')">16px</li>
    <li style="fontSize:20px" @click="setSize('20px')">20px</li>
  </aside>
</template>
