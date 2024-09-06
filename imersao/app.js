function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
   let campoPesquisa = document.getElementById("campo-pesquisa").value
   if (campoPesquisa == ""){
    section.innerHTML = "<p>nada foi encontrado</p>"
    return
   }
campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "resultados-pesquisa"
   let titulo = "";
   let descricao = "";
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
   if (titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)){
    resultados +=`
    <div class="item-resultado">
           <h2><a href="#" target="_blank"> ${dado.titulo}</a></h2>
           <p class="descricao-meta">${dado.descricao}
                <a href=${dado.link} target="_blank">Mais informacões</a>
               </p>
               </div>
               `
 } 
 
} 
if(!resultados){
    resultados = "Nada foi encontrado"
}
               section.innerHTML = resultados }