import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Article from './components/article'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import { Context } from "./hook/selectArticle";

function App() {
  const [context, setContext] = useState({
    id: 1,
    title: "texto1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam id voluptas unde, tempore itaque aspernatur veritatis eaque assumenda quis libero asperiores ratione. Rerum cum quidem, perspiciatis facere vitae, delectus officia ab velit praesentium, reiciendis quae? Ratione quo veritatis nobis quae laboriosam delectus molestiae est fugiat. Asperiores quod sit, suscipit enim, aspernatur dolore perspiciatis eaque explicabo laboriosam magni tempore? Necessitatibus pariatur veniam rerum voluptate quaerat deleniti ad excepturi aspernatur ducimus perspiciatis quam, voluptates maiores aut, fuga velit assumenda deserunt quod culpa, exercitationem similique earum? Esse non ea, nam harum officiis assumenda provident mollitia voluptates neque tenetur magnam consequuntur. Inventore dolor dicta esse quisquam, autem deserunt veritatis nobis nisi accusantium nesciunt beatae blanditiis ullam, sint cumque tenetur dolores hic iure, tempore accusamus unde expedita? Facilis necessitatibus earum soluta, veniam laborum unde deserunt aspernatur. Dolorum omnis consequatur iusto nihil et, dignissimos soluta veniam eius, suscipit, nulla velit eligendi! Voluptas, consequuntur iste. Et fugiat magnam, dignissimos alias, laborum neque sint facere natus ipsa qui fugit eligendi officiis ex veritatis? Corporis ipsum fuga blanditiis laudantium perferendis, exercitationem cumque eveniet. Ducimus, tempora pariatur minus debitis quasi laborum optio expedita maiores obcaecati sunt molestias corporis quia aliquid in modi eius totam. In, maxime exercitationem eaque itaque velit sit, mollitia recusandae nisi necessitatibus molestiae, corrupti fuga delectus. Nihil iusto, magnam maiores facere ullam hic tempora architecto reiciendis praesentium, explicabo adipisci dolor nostrum fuga deserunt recusandae odio quibusdam nulla velit voluptatibus quis rem incidunt dolorum? Aperiam magnam amet doloribus impedit esse! Libero iure ducimus voluptates ratione provident. Repellat, corporis?",
    img: "./logo512.png",
  });

  return (
    <Context.Provider value={[context, setContext]}>
    <div className="app">
      <div className="body">
        <Sidebar></Sidebar>
        <main>
          <Article></Article>
        </main>
      </div>
      <Footer></Footer>
    </div>
    </Context.Provider>  
  );
}

export default App;
