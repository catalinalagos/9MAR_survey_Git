//ALL GLOBAL VARIABLES
let allStoredEmotions = [];
let dictionaryEmotions = {};
let allStoredSelf = [];
let dictionarySelf = {};
let allStoredEnv = [];
let dictionaryEnv = {};

let codesColors = [];
let codesSelf = [];
let codesEnv = [];

var words = [];
var wordsStr = "";
let selfSize = 100;
let avgColor;
var colorsArray = [];
var allSocial = [];
var allEntities = [];

function setup() {
  var canvas = createCanvas(250, 250);
  canvas.parent('canvasForHTML');
}

function draw() {
  avgColor = colorAverage(colorsArray);
  backgroundGradient(avgColor);

  createSelf();

  drawInSelf(codesSelf);
  drawOutSelf(codesEnv);

  displayEmotions(colorsArray);
  continuousFeedback(wordsStr); //feedback from any key

}


function mouseClicked() {
}