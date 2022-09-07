// import Sidebar from './component/sidebar';

export default function Root() {
  function setColor(color) {
    document.getElementById("article-paragraph").style.color = color;
  }
  function setSize(size) {
    document.getElementById("article-paragraph").style.fontSize = size;
  }
  return <aside className="side">
    <div style={{display:"flex", justifyContent:"center", paddingTop:"10px"}}>
      <img src="http://localhost:9000/React-icon.svg.png" alt="react" height={48} width={54} />
    </div>
    <h4>Microfrontend</h4>  
    <hr />
    <h4>Cor da fonte</h4>
    <li style={{ color: "red" }} onClick={() => setColor("red")}>Vermelho</li>
    <li style={{ color: "black" }} onClick={() => setColor("black")}>Preto</li>
    <li style={{ color: "blue" }} onClick={() => setColor("blue")}>Azul</li>
    <li style={{ color: "yellow" }} onClick={() => setColor("yellow")}>Amarelo</li>
    <hr />
    <h4>Tamanho da fonte</h4>
    <li style={{ fontSize:"8px" }} onClick={() => setSize("8px")}>8px</li>
    <li style={{ fontSize:"12px" }} onClick={() => setSize("12px")}>12px</li>
    <li style={{ fontSize:"16px" }} onClick={() => setSize("16px")}>16px</li>
    <li style={{ fontSize:"20px" }} onClick={() => setSize("20px")}>20px</li>
  </aside>;
}
