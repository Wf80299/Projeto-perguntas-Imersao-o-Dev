// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual a principal novidade de jogabilidade no EA FC 2025?",
    respostas: [
      { opcao: "Rush 5x5", correto: true },
      { opcao: "Ultimate Team com ÍDOLOS", correto: false },
      { opcao: "Carreira de Jogador com histórias de ÍDOLOS", correto: false },
    ],
  },
  {
    pergunta: "Quantos atletas licenciados estão presentes no EA FC 2025?",
    respostas: [
      { opcao: "Mais de 19.000", correto: true },
      { opcao: "Cerca de 10.000", correto: false },
      { opcao: "Aproximadamente 5.000", correto: false },
    ],
  },
  {
    pergunta:
      "Qual modo de jogo permite criar um time de 5 jogadores com amigos?",
    respostas: [
      { opcao: "Rush 5x5 no Ultimate Team", correto: true },
      { opcao: "Carreira de Manager", correto: false },
      { opcao: "Partida Rápida", correto: false },
    ],
  },
  {
    pergunta:
      "Qual recurso utiliza dados do mundo real para influenciar as táticas de jogo?",
    respostas: [
      { opcao: "FC IQ", correto: true },
      { opcao: "Ultimate Team Moments", correto: false },
      { opcao: "VOLTA FOOTBALL", correto: false },
    ],
  },
  {
    pergunta:
      "Em qual modo de jogo é possível reescrever histórias de ÍDOLOS do futebol?",
    respostas: [
      { opcao: "Carreira de Jogador", correto: true },
      { opcao: "Ultimate Team", correto: false },
      { opcao: "Clubs", correto: false },
    ],
  },
  {
    pergunta: "Qual a principal novidade no modo Carreira Feminina?",
    respostas: [
      { opcao: "Cinco grandes ligas femininas", correto: true },
      { opcao: "Jogadoras personalizáveis", correto: false },
      { opcao: "Torneios exclusivos", correto: false },
    ],
  },
  {
    pergunta: "Qual o nome da nova forma de jogar com amigos em modo Rush?",
    respostas: [
      { opcao: "Rush 5x5", correto: true },
      { opcao: "Rush 3x3", correto: false },
      { opcao: "Rush 7x7", correto: false },
    ],
  },
  {
    pergunta: "Quantos estádios licenciados estão presentes no EA FC 2025?",
    respostas: [
      { opcao: "120", correto: true },
      { opcao: "80", correto: false },
      { opcao: "150", correto: false },
    ],
  },
  {
    pergunta: "Qual a principal mudança nos fundamentos táticos do jogo?",
    respostas: [
      { opcao: "Mais controle estratégico com o FC IQ", correto: true },
      { opcao: "Táticas pré-definidas", correto: false },
      { opcao: "Táticas aleatórias", correto: false },
    ],
  },
  {
    pergunta:
      "Qual modo de jogo permite mudar o estilo de jogo com Itens de Manager?",
    respostas: [
      { opcao: "Football Ultimate Team", correto: true },
      { opcao: "Carreira de Manager", correto: false },
      { opcao: "Clubs", correto: false },
    ],
  },
];

perguntas.sort(() => Math.random() - 0.5); // embaralhar as perguntas 

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
