async function lista() {
  const resposta = await fetch('abrigos.json');
  const listaAbrigo = await resposta.json();

 
  const secAbrigo = document.querySelector("#listaAbrigo");

 
  for(i=0; i<listaAbrigo.length;i++) {
      const articleAbrigo = document.createElement('article')
      const abrigo = listaAbrigo[i]
      
      articleAbrigo.innerHTML =`
       -Nome: <strong>${abrigo.nome}</strong>
       <p>-Endereço:<em>${abrigo.endereco}</em>
       -<span>${abrigo.cidade}</span>
       <p>-Telefone:<em>${abrigo.telefone}</em></p>
       -Capacidade <em>${abrigo.capacidade} Pessoas</em>
      `
      secAbrigo.appendChild(articleAbrigo)
  }    
}
lista()

