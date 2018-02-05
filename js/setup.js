'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = document.querySelector('.setup-similar-list');
var numberOfWizards = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randStr = function rand(arr) {
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
};

var randomNameAndSurname = function randomNameAndSurname(arrName, arrSurname) {
  return randStr(arrName) + ' ' + randStr(arrSurname);
};

var generateWizardsArray = function generateWizardsArray(amountWizards) {
  var arr = [];
  for (var i = 0; i < amountWizards; i++) {
    arr[i] = {
      name: randomNameAndSurname(names, surnames),
      coatColor: randStr(coatColor),
      eyesColor: randStr(eyesColor)
    };
  }
  return arr;
};

var createWizardNode = function createWizardNode(obj, template) {
  var newNode = template.cloneNode(true);
  newNode.querySelector('.setup-similar-label').textContent = obj.name;
  newNode.querySelector('.wizard-coat').style.fill = obj.coatColor;
  newNode.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
  return newNode;
};

var generateWizardsNode = function generateWizardsNode(amountWizards, template) {
  var wizards = generateWizardsArray(amountWizards);
  var wizardTemplateAcc = document.createDocumentFragment();
  for (var i = 0; i < amountWizards; i++) {
    wizardTemplateAcc.appendChild(createWizardNode(wizards[i], template));
  }
  return wizardTemplateAcc;
};

var renderingWizards = function renderingWizards(parentNode, appendNode) {
  parentNode.appendChild(appendNode);
};

renderingWizards(similarListElement, generateWizardsNode(numberOfWizards, similarWizardTemplate));
