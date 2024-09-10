function pesquisar() {

// Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section= document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo!</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo inclui campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Constrói o HTML para cada item do resultado da pesquisa, formatando o título, descrição e link
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                 <a href="${dado.link}" target="_blank">Mais informações</a>
                </div> 
        `;
        }  

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>" 
    }
    
    section.innerHTML = resultados
}

// Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior
let section = document.getElementById("resultados-pesquisa")
console.log(section)

