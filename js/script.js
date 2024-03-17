 const buscarDados = async () => {
    const estado = document.querySelector("#estado").value.toUpperCase();

  if(!estado){
    alert("informe a sigla.");
    return;
  }

    url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API.");
      }
      const casos = await response.json();

      PreencherTabela(casos);
    }
    catch (error) {
      console.error('erro ao carregar', error);
      alert("erro ao buscar. Verifique a sigla do estado.")
    }
     };

    const PreencherTabela = (casos) => {
    const tableBody = document.querySelector("#api-table tbody");

    const row = tableBody.insertRow();

    row.insertCell(0).textContent = casos.uid;
    row.insertCell(1).textContent = casos.uf;
    row.insertCell(2).textContent = casos.cases;
    row.insertCell(3).textContent = casos.deaths;

  
  };

  document.getElementById('enviar').addEventListener('click', function(event){
    event.preventDefault();
    buscarDados();
  });