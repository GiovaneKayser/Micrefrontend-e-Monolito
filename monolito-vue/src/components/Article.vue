<script setup>
import { watchEffect, ref } from 'vue';

const article = ref({
    id: 1,
    title: "texto1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam id voluptas unde, tempore itaque aspernatur veritatis eaque assumenda quis libero asperiores ratione. Rerum cum quidem, perspiciatis facere vitae, delectus officia ab velit praesentium, reiciendis quae? Ratione quo veritatis nobis quae laboriosam delectus molestiae est fugiat. Asperiores quod sit, suscipit enim, aspernatur dolore perspiciatis eaque explicabo laboriosam magni tempore? Necessitatibus pariatur veniam rerum voluptate quaerat deleniti ad excepturi aspernatur ducimus perspiciatis quam, voluptates maiores aut, fuga velit assumenda deserunt quod culpa, exercitationem similique earum? Esse non ea, nam harum officiis assumenda provident mollitia voluptates neque tenetur magnam consequuntur. Inventore dolor dicta esse quisquam, autem deserunt veritatis nobis nisi accusantium nesciunt beatae blanditiis ullam, sint cumque tenetur dolores hic iure, tempore accusamus unde expedita? Facilis necessitatibus earum soluta, veniam laborum unde deserunt aspernatur. Dolorum omnis consequatur iusto nihil et, dignissimos soluta veniam eius, suscipit, nulla velit eligendi! Voluptas, consequuntur iste. Et fugiat magnam, dignissimos alias, laborum neque sint facere natus ipsa qui fugit eligendi officiis ex veritatis? Corporis ipsum fuga blanditiis laudantium perferendis, exercitationem cumque eveniet. Ducimus, tempora pariatur minus debitis quasi laborum optio expedita maiores obcaecati sunt molestias corporis quia aliquid in modi eius totam. In, maxime exercitationem eaque itaque velit sit, mollitia recusandae nisi necessitatibus molestiae, corrupti fuga delectus. Nihil iusto, magnam maiores facere ullam hic tempora architecto reiciendis praesentium, explicabo adipisci dolor nostrum fuga deserunt recusandae odio quibusdam nulla velit voluptatibus quis rem incidunt dolorum? Aperiam magnam amet doloribus impedit esse! Libero iure ducimus voluptates ratione provident. Repellat, corporis?",
    img: "./pexels-camila-benítez-10970424.jpg",
    color: "black"
})
const setArticle = (art) => {
    article.value = art;
    console.log(article);
}

watchEffect(() => {
    
    window.addEventListener(
        '@Giovane/appreciation/todo/setArticle',
        event => {
            console.log(event);
            setArticle(event.detail);
        })
});


</script>
<template>
    <div className="appreciation">
        <img class="img-article" :src="article.img"/>
        <h2>{{article.title}}</h2>
        <br />
        <p id="article-paragraph">
            {{ article.text }}
        </p>
    </div>
</template>

<script>
</script>