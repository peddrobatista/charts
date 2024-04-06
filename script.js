const ctx = document.getElementById('grafico1');

let labelsX = ['Disponibilidade', 'Qualidade', 'Peformance']
let valores = [0, 0, 0]
let grafico1 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsX,
      datasets: [{
        label: '# of Votes',
        data: valores,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const obtendoDados = () => {
    const endpoint = "https://ddcc5b01-2bb9-4fec-87e8-0ee48818e824-00-3a1rew3d9p0le.picard.replit.dev/"
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
      valores[0] = res.disponibilidade
      valores[1] = res.qualidade
      valores[2] = res.peformance
      grafico1.update()
    })
    .catch(erro => {
      console.log("ERRO: " + erro);
    })
  }
obtendoDados();