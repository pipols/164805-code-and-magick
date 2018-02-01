'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_GAP = 10;
var CLOUD_FONT = '16px PT Mono';
var CLOUD_FONT_GAP = 20;
var CLOUD_FONT_LEFT_GRAP = 120;
var CLOUD_FONT_TOP_GRAP = 20;
var CLOUD_FONT_HEIGHT = 20;
var CLOUD_BG_COLOR = 'rgba(255, 255, 255, 1)';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var COLLUMN_WIDTH = 40;
var COLLUMN_HEIGHT = 150;
var COLLUMN_GAP = 50;
var COLLUMN_PADDING_TOP = 120;
var COLLUMN_FONT_COLOR = 'rgba(0, 0, 0, 1)';
var COLLUMN_COLOR_CURRENT_PLAYER = 'rgba(255, 0, 0, 1)';

window.renderStatistics = function (ctx, names, times) {
  var maxTime = Math.max.apply(null, times);

  var renderCloud = function (x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderText = function (text, x, y) {
    ctx.font = CLOUD_FONT;
    ctx.fillStyle = COLLUMN_FONT_COLOR;
    ctx.fillText(text, x, y);
  };

  var randomColor = function () {
    var num = Math.random() * ((0.9 - 0.2) + 0.2);
    return 'rgba(0, 0, 255,' + num.toFixed(1) + ')';
  };

  var renderCollumn = function (collumnIndex, name, time) {
    var currentCollumnHeight = (COLLUMN_HEIGHT / maxTime) * time;
    var collumnY = CLOUD_Y + COLLUMN_PADDING_TOP + COLLUMN_HEIGHT - CLOUD_GAP - CLOUD_FONT_GAP - currentCollumnHeight;
    var collumnX = CLOUD_X + COLLUMN_GAP + (COLLUMN_WIDTH + COLLUMN_GAP) * collumnIndex;

    ctx.fillStyle = COLLUMN_FONT_COLOR;
    ctx.fillText(Math.round(time), collumnX, collumnY - CLOUD_FONT_GAP);

    ctx.fillStyle = (name === 'Вы') ? COLLUMN_COLOR_CURRENT_PLAYER : randomColor();
    ctx.fillRect(collumnX, collumnY, COLLUMN_WIDTH, currentCollumnHeight);

    ctx.fillStyle = COLLUMN_FONT_COLOR;
    ctx.fillText(name, collumnX, collumnY + currentCollumnHeight + CLOUD_FONT_GAP);
  };


  renderCloud(CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW_COLOR);
  renderCloud(CLOUD_X, CLOUD_Y, CLOUD_BG_COLOR);
  renderText('Ура вы победили!', CLOUD_FONT_LEFT_GRAP, CLOUD_FONT_TOP_GRAP + CLOUD_FONT_HEIGHT);
  renderText('Список результатов:', CLOUD_FONT_LEFT_GRAP, CLOUD_FONT_TOP_GRAP + (CLOUD_FONT_HEIGHT * 2));

  for (var i = 0; i < names.length; i++) {
    renderCollumn(i, names[i], times[i]);
  }
};
