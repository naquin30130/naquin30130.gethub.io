var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        currentLevel: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 900, y:250},
          { type: "sawblade", x: 1000, y:200},
          { type: "sawblade", x: 850,  y:300},
          { type: "enemy", x: 700, y:groundY-20},
          { type: "enemy", x: 800, y:groundY-100},
          { type: "enemy", x: 999, y:groundY-50},
          { type: "reward", x: 1200, y:groundY-20},
          { type: "reward", x: 1500, y:groundY-30},
          { type: "marker", x: 2000, y:groundY-30},
        ],
      },
      {
        name: "Robot Rampage",
        currentLevel: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 900, y:250},
          { type: "sawblade", x: 1000, y:200},
          { type: "sawblade", x: 850,  y:300},
          { type: "enemy", x: 700, y:groundY-20},
          { type: "enemy", x: 800, y:groundY-100},
          { type: "enemy", x: 999, y:groundY-50},
          { type: "reward", x: 1200, y:groundY-20},
          { type: "reward", x: 1500, y:groundY-30},
          { type: "marker", x: 2000, y:groundY-30},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
