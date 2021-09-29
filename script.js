var carta1 = {
  nome: "Bulbasaur",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  },
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
};
var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  },
  imagem:
    "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg"
};

var carta3 = {
  nome: "Shiryu de Dragão",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  },
  imagem:
    "https://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg"
};
var carta4 = {
  nome: "Goku",
  atributos: {
    ataque: 10,
    defesa: 7,
    magia: 9
  },
  imagem: "https://vigilianerd.com.br/wp-content/uploads/2018/05/Capa-goku.jpg"
};
var carta5 = {
  nome: "Naruto",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 10
  },
  imagem:
    "https://sm.ign.com/ign_br/screenshot/default/naruto-1498593686428-v2-1920x1080_pxb6.png"
};

var carta6 = {
  nome: "Mario",
  atributos: {
    ataque: 4,
    defesa: 6,
    magia: 7
  },
  imagem:
    "https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/curated%20list/Jump%20for%20joy%20with%20Super%20Mario/515x325_gameStore_mario?v=2021082902"
};
var carta7 = {
  nome: "Elza Scarlet",
  atributos: {
    ataque: 8,
    defesa: 10,
    magia: 8
  },
  imagem:
    "https://i.pinimg.com/originals/f8/e5/ed/f8e5ed7563245923b47249ed5f7cb3a1.jpg"
};

var carta8 = {
  nome: "Homem de ferro",
  atributos: {
    ataque: 8,
    defesa: 10,
    magia: 1
  },
  imagem:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/03/iron-man-1.jpg"
};

var carta9 = {
  nome: "Natsu Dragneel",
  atributos: {
    ataque: 8,
    defesa: 4,
    magia: 10
  },
  imagem:
    "https://http2.mlstatic.com/D_NQ_NP_749620-MLB27866842280_072018-O.jpg"
};

var carta10 = {
  nome: "Thor",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 9
  },
  imagem:
    "data:image/jpeg;base64,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"
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
var cartaJogador;
var cartaMaquina;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador === numeroCartaMaquina) {
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }

  cartaJogador = cartas[numeroCartaJogador];
  // var imagem = document.getElementById("imagens");
  // imagem.innerHTML =
  //   "<figure>" +
  //   "<img class='carta-imagem' src=" +
  //   cartaJogador.imagem +
  //   ">" +
  //   "<figcaption>" +
  //   cartaJogador.nome +
  //   "<br>" +
  //   " Ataque: " +
  //   cartaJogador.atributos.ataque +
  //   "<br>" +
  //   " Defesa: " +
  //   cartaJogador.atributos.defesa +
  //   "<br>" +
  //   " Magia: " +
  //   cartaJogador.atributos.magia +
  //   "<br>" +
  //   "</figcaption>" +
  //   "</figure>";

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnReset").disabled = false;

  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" + atributo + ">" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (atributoSelecionado == undefined) {
    Swal.fire({
      confirmButtonColor: '#3085d6',
      icon: 'error',
      text: 'Por favor, Selecione o atributo'
    });

  } else if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Você venceu</p>";
    var venceu = new Audio("./src/music/YouWin.mp3")
    venceu.play();
  } else if (valorCartaJogador == valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Você perdeu</p>";
    var venceu = new Audio("./src/music/YouLose.mp3")
    venceu.play();
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function restart() {
  var opcoes = document.getElementById("opcoes");
  var elementoResultado = document.getElementById("resultado");
  var imagem = document.getElementById("imagens");
  var divCartaJogador = document.getElementById("carta-jogador");
  var divMaquina = document.getElementById("carta-maquina");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = null;
  divCartaJogador.innerHTML = moldura;
  divMaquina.style.backgroundImage = null;
  divMaquina.innerHTML = moldura;
  elementoResultado.innerHTML = null;
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnReset").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" +
      atributo +
      ">" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divMaquina = document.getElementById("carta-maquina");
  divMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value=" +
      atributo +
      ">" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
