import React, { useState, useContext } from "react";
import Appreciation from "./appreciation";
import { Context } from "../hook/selectArticle";

export default function Footer() {
  const [selectArticle, setSelectArticle] = useContext(Context);

  const listArticles = [
    {
      id: 1,
      title: "texto1",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam id voluptas unde, tempore itaque aspernatur veritatis eaque assumenda quis libero asperiores ratione. Rerum cum quidem, perspiciatis facere vitae, delectus officia ab velit praesentium, reiciendis quae? Ratione quo veritatis nobis quae laboriosam delectus molestiae est fugiat. Asperiores quod sit, suscipit enim, aspernatur dolore perspiciatis eaque explicabo laboriosam magni tempore? Necessitatibus pariatur veniam rerum voluptate quaerat deleniti ad excepturi aspernatur ducimus perspiciatis quam, voluptates maiores aut, fuga velit assumenda deserunt quod culpa, exercitationem similique earum? Esse non ea, nam harum officiis assumenda provident mollitia voluptates neque tenetur magnam consequuntur. Inventore dolor dicta esse quisquam, autem deserunt veritatis nobis nisi accusantium nesciunt beatae blanditiis ullam, sint cumque tenetur dolores hic iure, tempore accusamus unde expedita? Facilis necessitatibus earum soluta, veniam laborum unde deserunt aspernatur. Dolorum omnis consequatur iusto nihil et, dignissimos soluta veniam eius, suscipit, nulla velit eligendi! Voluptas, consequuntur iste. Et fugiat magnam, dignissimos alias, laborum neque sint facere natus ipsa qui fugit eligendi officiis ex veritatis? Corporis ipsum fuga blanditiis laudantium perferendis, exercitationem cumque eveniet. Ducimus, tempora pariatur minus debitis quasi laborum optio expedita maiores obcaecati sunt molestias corporis quia aliquid in modi eius totam. In, maxime exercitationem eaque itaque velit sit, mollitia recusandae nisi necessitatibus molestiae, corrupti fuga delectus. Nihil iusto, magnam maiores facere ullam hic tempora architecto reiciendis praesentium, explicabo adipisci dolor nostrum fuga deserunt recusandae odio quibusdam nulla velit voluptatibus quis rem incidunt dolorum? Aperiam magnam amet doloribus impedit esse! Libero iure ducimus voluptates ratione provident. Repellat, corporis?",
      img: "./pexels-camila-benítez-10970424.jpg",
      color: "black"
    },
    {
      id: 2,
      title: "texto2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus officia ab velit praesentium, reiciendis quae? Ratione quo veritatis nobis quae laboriosam delectus molestiae est fugiat. Asperiores quod sit, suscipit enim, aspernatur dolore perspiciatis eaque explicabo laboriosam magni tempore? Necessitatibus pariatur veniam rerum voluptate quaerat deleniti ad excepturi aspernatur ducimus perspiciatis quam, voluptates maiores aut, fuga velit assumenda deserunt quod culpa, exercitationem similique earum? Esse non ea, nam harum officiis assumenda provident mollitia voluptates neque tenetur magnam consequuntur. Inventore dolor dicta esse quisquam, autem deserunt veritatis nobis nisi accusantium nesciunt beatae blanditiis ullam, sint cumque tenetur dolores hic iure, tempore accusamus unde expedita? Facilis necessitatibus earum soluta, veniam laborum unde deserunt aspernatur. Dolorum omnis consequatur iusto nihil et, dignissimos soluta veniam eius, suscipit, nulla velit eligendi! Voluptas, consequuntur iste. Et fugiat magnam, dignissimos alias, laborum neque sint facere natus ipsa qui fugit eligendi officiis ex veritatis? Corporis ipsum fuga blanditiis laudantium perferendis, exercitationem cumque eveniet. Ducimus, tempora pariatur minus debitis quasi laborum optio expedita maiores obcaecati sunt molestias corporis quia aliquid in modi eius totam. In, maxime exercitationem eaque itaque velit sit, mollitia recusandae nisi necessitatibus molestiae, corrupti fuga delectus. Nihil iusto, magnam maiores facere ullam hic tempora architecto reiciendis praesentium, explicabo adipisci dolor nostrum fuga deserunt recusandae odio quibusdam nulla velit voluptatibus quis rem incidunt dolorum? Aperiam magnam amet doloribus impedit esse! Libero iure ducimus voluptates ratione provident. Repellat, corporis?",
      img: "./pexels-jhonny-salas-brochero-11847042.jpg",
      color: "black"
    },
    {
      id: 3,
      title: "texto3",
      text: "Consectetur adipisicing elit. Nam id voluptas unde, tempore itaque aspernatur veritatis eaque assumenda quis libero asperiores ratione. Rerum cum quidem, perspiciatis facere vitae, delectus officia ab velit praesentium, reiciendis quae? Ratione quo veritatis nobis quae laboriosam delectus molestiae est fugiat. Asperiores quod sit, suscipit enim, aspernatur dolore perspiciatis eaque explicabo laboriosam magni tempore? Necessitatibus pariatur veniam rerum voluptate quaerat deleniti ad excepturi aspernatur ducimus perspiciatis quam, voluptates maiores aut, fuga velit assumenda deserunt quod culpa, exercitationem similique earum? Esse non ea, nam harum officiis assumenda provident mollitia voluptates neque tenetur magnam consequuntur. Inventore dolor dicta esse quisquam, autem deserunt veritatis nobis nisi accusantium nesciunt beatae blanditiis ullam, sint cumque tenetur dolores hic iure, tempore accusamus unde expedita? Facilis necessitatibus earum soluta, veniam laborum unde deserunt aspernatur. Dolorum omnis consequatur iusto nihil et, dignissimos soluta veniam eius, suscipit, nulla velit eligendi! Voluptas, consequuntur iste. Et fugiat magnam, dignissimos alias, laborum neque sint facere natus ipsa qui fugit eligendi officiis ex veritatis? Corporis ipsum fuga blanditiis laudantium perferendis, exercitationem cumque eveniet. Ducimus, tempora pariatur minus debitis quasi laborum optio expedita maiores obcaecati sunt molestias corporis quia aliquid in modi eius totam. In, maxime exercitationem eaque itaque velit sit, mollitia recusandae nisi necessitatibus molestiae, corrupti fuga delectus. Nihil iusto, magnam maiores facere ullam hic tempora architecto reiciendis praesentium, explicabo adipisci dolor nostrum fuga deserunt recusandae odio quibusdam nulla velit voluptatibus quis rem incidunt dolorum? Aperiam magnam amet doloribus impedit esse! Libero iure ducimus voluptates ratione provident. Repellat, corporis?",
      img: "./pexels-nacho-posse-9278713.jpg",
      color: "black"
    },
    {
      id: 4,
      title: "texto4",
      text: "Quae laboriosam delectus molestiae est fugiat. Asperiores quod sit, suscipit enim, aspernatur dolore perspiciatis eaque explicabo laboriosam magni tempore? Necessitatibus pariatur veniam rerum voluptate quaerat deleniti ad excepturi aspernatur ducimus perspiciatis quam, voluptates maiores aut, fuga velit assumenda deserunt quod culpa, exercitationem similique earum? Esse non ea, nam harum officiis assumenda provident mollitia voluptates neque tenetur magnam consequuntur. Inventore dolor dicta esse quisquam, autem deserunt veritatis nobis nisi accusantium nesciunt beatae blanditiis ullam, sint cumque tenetur dolores hic iure, tempore accusamus unde expedita? Facilis necessitatibus earum soluta, veniam laborum unde deserunt aspernatur. Dolorum omnis consequatur iusto nihil et, dignissimos soluta veniam eius, suscipit, nulla velit eligendi! Voluptas, consequuntur iste. Et fugiat magnam, dignissimos alias, laborum neque sint facere natus ipsa qui fugit eligendi officiis ex veritatis? Corporis ipsum fuga blanditiis laudantium perferendis, exercitationem cumque eveniet. Ducimus, tempora pariatur minus debitis quasi laborum optio expedita maiores obcaecati sunt molestias corporis quia aliquid in modi eius totam. In, maxime exercitationem eaque itaque velit sit, mollitia recusandae nisi necessitatibus molestiae, corrupti fuga delectus. Nihil iusto, magnam maiores facere ullam hic tempora architecto reiciendis praesentium, explicabo adipisci dolor nostrum fuga deserunt recusandae odio quibusdam nulla velit voluptatibus quis rem incidunt dolorum? Aperiam magnam amet doloribus impedit esse! Libero iure ducimus voluptates ratione provident. Repellat, corporis?",
      img: "./pexels-emiliano-arano-4862568.jpg",
      color: "black"
    },
    {
      id: 5,
      title: "texto5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla quaerat facilis, officiis esse temporibus vitae dolore quam ab voluptates fugiat hic maiores natus non, porro tempora blanditiis eligendi, debitis animi. Repellendus culpa sit eveniet labore. Magni, atque aliquam. Neque aperiam natus dolores soluta vel perspiciatis fuga perferendis voluptatibus animi labore! Incidunt pariatur tenetur minima laboriosam optio molestias laudantium, vitae facilis atque eum repudiandae repellat libero velit quis magnam corporis nulla neque blanditiis quos. Amet quas dicta ducimus, deleniti animi harum consequuntur atque quasi illum, vitae nostrum ut facilis porro veritatis itaque similique suscipit ullam totam veniam enim sapiente? Incidunt.",
      img: "./pexels-micaela-alejandro-11289040.jpg",
      color: "black"
    },
  ];
  const articles = listArticles.map((article, index) => (
    <Appreciation key={index} article={article} setSelectArticle={setSelectArticle} />
  ));
  return (
    <>
      <footer>
        <div className="articles">{articles}</div>
      </footer>
    </>
  );
}
