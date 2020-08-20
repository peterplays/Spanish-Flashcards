function FlashCard(spanish, english) {
  this.spanish = spanish;
  this.english = english;
}

//1Az words...use JSON for future lists?
let abajo = new FlashCard("abajo", "down");
let debajo = new FlashCard('debajo', 'below, under');
let tambien = new FlashCard('tambien', 'too, also');
let parece = new FlashCard('parece', 'it seems');
let estaba = new FlashCard('estaba', 'I was');
let hermano = new FlashCard('hermano', 'brother');
let miércoles = new FlashCard('miércoles', 'Wednesday');
let estamos = new FlashCard('estamos', 'we are');
let delante = new FlashCard('delante', 'in front of');
let arriba = new FlashCard('arriba', 'up, above');
let ahora = new FlashCard('ahora', 'now');
let abuela = new FlashCard('abuela', 'grandma');
let pequeño = new FlashCard('pequeño', 'little, small');
let queremos = new FlashCard('queremos', 'we want');
let tenemos = new FlashCard('tenemos', 'we have');
let además = new FlashCard('además', 'also, too, furthermore');
let algunos = new FlashCard('algunos', 'some');
let cuadrado = new FlashCard('cuadrado', 'square');
let domingo = new FlashCard('domingo', 'Sunday');
let familia = new FlashCard('familia', 'family');
//let nostros || nosotros = new FlashCard('nostros', 'we')
let podemos = new FlashCard('podemos', 'we can');
let siempre = new FlashCard('siempre', 'always, forever');
let verano = new FlashCard('verano', 'summer');
let adentro = new FlashCard('adentro', 'indoors');
let amarillo = new FlashCard('amarillo', 'yellow');
let circulo = new FlashCard('circulo', 'circle');
let encima = new FlashCard('encima', 'on top, above, over');
let hacemos = new FlashCard('hacemos', 'we make, we do, we perform');
let otoño = new FlashCard('otoño', 'fall, autumn');
let primavera = new FlashCard('primavera', 'spring, springtime');
let siguiente = new FlashCard('siguiente', 'next, after, following');
let comenzar = new FlashCard('comenzar', 'start, begin');
let cualquier = new FlashCard('cualquier', 'any');
let distinto = new FlashCard('distinto', 'different, distinct');
let escribir = new FlashCard('escribir', 'to write');
let llegamos = new FlashCard('llegamos', 'we arrived');
let ningunoNinguna = new FlashCard('ninguno/ninguna', 'none, neither');
let pusieron = new FlashCard('pusieron', 'they put');
let silencio = new FlashCard('silencio', 'silence, quiet');
let trabajar = new FlashCard('trabajar', 'to work');
let ahorita = new FlashCard('ahorita', 'in a bit');
let conmigo = new FlashCard('conmigo', 'with me');
let cualquiera = new FlashCard('cualquiera', 'anyone, anybody');
let durante = new FlashCard('durante', 'during');
let favorito = new FlashCard('favorito', 'favorite');
let mayores = new FlashCard('mayores', 'greater, higher');
let palabras = new FlashCard('palabras', 'words');
let rápido = new FlashCard('rápido', 'fast, quick');
let socorro = new FlashCard('socorro', 'help, relief');
let trajeron = new FlashCard('trajeron', 'they brought');
let animales = new FlashCard('animales', 'animals');
let conocer = new FlashCard('conocer', 'to know (a specific object/place/person)');
let deprisa = new FlashCard('deprisa', 'quickly, fast');
let encontrar = new FlashCard('encontrar', 'find');
let gigante = new FlashCard('gigante','giant'); 
let mediante = new FlashCard('mediante', 'through');
let preguntar = new FlashCard('preguntar', 'ask');
let regresar = new FlashCard('regrasar', 'to return');
let solamente = new FlashCard('solamente', 'only');
let últimoÚltima = new FlashCard('último/última', 'last');
let aprisa = new FlashCard('aprisa', 'quickly');
let consigue = new FlashCard('consigue', 'get, achieve');
let despacio = new FlashCard('despacio', 'slow, slowly');
let enseñar = new FlashCard('enseñar', 'teach, show');
let juguente = new FlashCard('juguente', 'playful');
let leyendo = new FlashCard('leyendo', 'reading');
let necesita = new FlashCard('necesita', 'needs to');
let pudieron = new FlashCard('pudieron', 'could');
let primero = new FlashCard('primero', 'first');
let segundo = new FlashCard('seguno', 'second');
let tercero = new FlashCard('tercero', 'third');
let vinieron = new FlashCard('vinieron', 'they came');
let mejores = new FlashCard('mejores', 'top');
let regular = new FlashCard('regular', 'regular');
let supieron = new FlashCard('supieron', 'they knew');
let usted = new FlashCard('usted', 'you');
let ustedes = new FlashCard('ustedes', 'your');
let ayudar = new FlashCard('ayudar', 'help, assist');
let contento = new FlashCard('contento', 'happy, glad, content, pleased');
let después = new FlashCard('después', 'then, after');
let entiende = new FlashCard('entiende', 'unstands');
let lectura = new FlashCard('lectura', 'reading');
let mientras = new FlashCard('mientras', 'while');
let principio = new FlashCard('principio', 'beginning, principle');
let tampoco = new FlashCard('tampoco', 'neither');
let bastante = new FlashCard('bastante', 'enough, quite, rather, pretty, fairly');
let contigo = new FlashCard('contigo', 'with you');
let diferente = new FlashCard('diferente', 'different');
let entonces = new FlashCard('entonces', 'so, then');
let salieron = new FlashCard('salieron', 'they left');
let saber = new FlashCard('saber', 'to know (a fact/skill/something by heart');
//test words
let testWord = new FlashCard('test', 'testing');
let testWord1 = new FlashCard('test1', 'testing1');
let testWord2 = new FlashCard('test2', 'testing2');

//2V word list from JSON file
const wordListJSON = 
{ "wordList2VPalabrasConPoder": [
  {
    "spanish": "abajo",
    "english": "down"
  }, 
  {
    "spanish": "abuela",
    "english": "grandma"
  },
  {
    "spanish": "además",
    "english": "also, besides"
  },
  {
    "spanish": "adentro",
    "english": "indoors, in"
  },
  {
    "spanish": "afuera",
    "english": "outside, out"
  },
  {
    "spanish": "ahora", 
    "english": "now"
  },
  {
    "spanish": "algunos",  
    "english": "some, few"
  },
  {
    "spanish": "amarillo", 
    "english": "yellow"
  },
  {
    "spanish": "animal", 
    "english": "animal"
  },
  {
    "spanish": "arriba", 
    "english": "above, up"
  },
  {
    "spanish": "cuadrado", 
    "english": "square"
  },
  {
    "spanish": "círculo",
    "english": "circle"
  },
  {
    "spanish": "debajo",
    "english": "below, beneath, under"
  },
  {
    "spanish": "delante",
    "english": "in front of, before"
  },
  {
    "spanish": "domingo",
    "english": "Sunday"
  },
  {
    "spanish": "encima",
    "english": "over, above"
  },
  {
    "spanish": "estaba",
    "english": "I was"
  },
  {
    "spanish": "estamos",
    "english": "we're"
  },
  {
    "spanish": "familia",
    "english": "family"
  },
  {
    "spanish": "hacemos",
    "english": "we make"
  },
  {
    "spanish": "hermano/hermana",
    "english": "brother/sister"
  },
  {
    "spanish": "miércoles",
    "english": "Wednesday"
  },
  {
    "spanish": "nosotros",
    "english": "us, we"
  },
  {
    "spanish": "otoño",
    "english": "fall, autumn"
  },
  {
    "spanish": "parece",
    "english": "it seems"
  },
  {
    "spanish": "pequeño",
    "english": "litte, small"
  },
  {
    "spanish": "podemos",
    "english": "we can"
  },  
  {
    "spanish": "primavera",
    "english": "spring"
  },
  {
    "spanish": "primero",
    "english": "first"
  },
  {
    "spanish": "queremos",
    "english": "we want"
  },
  {
    "spanish": "siempre",
    "english": "forever, always"
  },
  {
    "spanish": "siguiente",
    "english": "following"
  },
  {
    "spanish": "también",
    "english": "too, also"
  },
  {
    "spanish": "tenemos",
    "english": "we have"
  },
  {
    "spanish": "verano",
    "english": "summer"
  }]
}
//let wordListJSONParsed = JSON.parse(wordListJSON);

// let testList = document.querySelector('.testList');
// testList.innerHTML = '<li>' + wordListJSONParsed + '</li>';

//set up separate word list arrays
const wordList1Az = [
  ahora, ahorita, animales, aprisa, ayudar, bastante, 
  comenzar, conmigo, conocer, consigue, contento, contigo, 
  cualquier, cualquiera, deprisa, despacio, después, diferente,
  distinto, durante, encontrar, enseñar, entiende, entonces,
  escribir, favorito, gigante, juguente, lectura, leyendo,
  llegamos, mayores, mediante, mejores, mientras, necesita,
  ningunoNinguna, palabras, preguntar, primero, principio, pudieron, 
  pusieron, rápido, regresar, regular, salieron, segundo,
  silencio, socorro, solamente, supieron, tampoco, tercero,
  trabajar, trajeron, últimoÚltima, usted, ustedes, vinieron
]  
 
let testDeck = [
  testWord, testWord1, testWord2
]
let cardDeck = [
  abajo, 
    debajo,
    tambien,
    parece,
    estaba,
    hermano,
    miércoles,
    estamos,
    delante,
    arriba,
    abuela,
    pequeño,
    queremos,
    tenemos,
    además,
];
//empty array for moving "active" deck to
let activeDeck =[];

//empty array for moving "completed" cards to (still needed?)
let completedCards = [];

//empty array to for shuffling the deck
let shuffledDeck =[];

//set up variables
let cardNumber = 0;
let currentCard = activeDeck[cardNumber];
let cardSpanish = document.querySelector('.spanish');
let cardEnglish = document.querySelector('.english');

//set up buttons
let wordList1AzBtn = document.getElementsByClassName('wordList1AzBtn')[0];
let testDeckBtn = document.querySelector('.testDeckBtn');
let wordList2VBtn = document.getElementById('wordList2VBtn');
let showEnglishBtn = document.querySelector('.cardContainer');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.previous');
let removeButton = document.querySelector('.remove');
let shuffleButton = document.querySelector('.shuffleBtn');
let completedList = document.querySelector('.completedList');

//set up functions
function showSpanish() {
  cardSpanish.textContent = currentCard.spanish;
}

function showEnglish() {
  cardEnglish.textContent = currentCard.english;
}

function hideEnglish() {
  cardEnglish.textContent = '';
}

function updateCurrentCard() {
  // if (cardNumber > activeDeck.length) {
  //   cardNumber = 0;
  // }
  currentCard = activeDeck[cardNumber];
}

function addToCompletedList() {
  completedList.innerHTML += '<li>' + '<strong>' + activeDeck[cardNumber].spanish + '</strong>' + ' -- ' + activeDeck[cardNumber].english + '</li>';
}

function previousCard() {
  if (cardNumber > 0) {
  cardNumber -= 1;
  updateCurrentCard();
  showSpanish();
  hideEnglish()
  } else {
    cardNumber = (activeDeck.length - 1);
    updateCurrentCard();
    showSpanish();
    hideEnglish();
  }
}

function nextCard() {
  if (cardNumber < (activeDeck.length - 1)) {
    //addToCompletedList();
    cardNumber += 1;
    updateCurrentCard();
    showSpanish();
    hideEnglish();
  } else {
      cardNumber = 0;
      updateCurrentCard();
      showSpanish();
      hideEnglish();
  }
}

function removeCard() {
  addToCompletedList();
  completedCards = activeDeck.splice(cardNumber, 1);
  if (cardNumber < (activeDeck.length - 1)) {
    //addToCompletedList();
    cardNumber += 1;
    updateCurrentCard();
    showSpanish();
    hideEnglish();
  } else {
      cardNumber = 0;
      updateCurrentCard();
      showSpanish();
      hideEnglish();
  }
}

function shuffleDeck() {
  let deckLength = activeDeck.length;
  for (i = 0; i < deckLength; i++) {
    let randomCard = Math.floor(Math.random() * activeDeck.length);
    shuffledDeck.push(activeDeck[randomCard]);
    activeDeck.splice(randomCard, 1);
  }
  activeDeck = shuffledDeck;
  cardNumber = 0;
  updateCurrentCard();
  showSpanish();
}

function makeDeckActive(deckName) {
  activeDeck = deckName;
  cardNumber = 0;
  hideEnglish();
  updateCurrentCard();
  showSpanish();
}


//button and click behavior
wordList1AzBtn.onclick = function () {
  makeDeckActive(wordList1Az);
}

testDeckBtn.onclick = function () {
  makeDeckActive(testDeck)
}

wordList2VBtn.onclick = function () {
  let wordList2V = [];
  for (let i=0; i < wordListJSON.wordList2VPalabrasConPoder.length; i++) {
    wordList2V.push(wordListJSON.wordList2VPalabrasConPoder[i]);
  }
  makeDeckActive(wordList2V)
}

showEnglishBtn.onclick = function() {
  showEnglish();
}

nextButton.onclick = function() {
  nextCard();
}

prevButton.onclick = function() {
  previousCard();
}

removeButton.onclick = function() {
  removeCard();
}

shuffleButton.onclick = function() {
  shuffleDeck();
}

//Begin program by showing first card
//showSpanish();



///////TO DO//////
// Limit cardCount based on word list (DONE)
// Create separate word lists for each level...JSON?
//(DONE) Be able to select which list is being used in the app
//(DONE) Add "random" or "shuffle" button to change card order
// Toggle between card view and list view?
//(DONE) Have each completed card added to a visible list on the side/bottom
//(DONE) Allow user to filter out or complete easy cards
// Get card deck to "wrap" from end->start and start-> (DONE)
// Create local server to be able to load JSON data
// Reset deck function and button
// Create JSON list from CSV?

//BUGS//
//Removing 2nd to last card resets index to [0]
//Error on re-loading same deck after it has been shuffled