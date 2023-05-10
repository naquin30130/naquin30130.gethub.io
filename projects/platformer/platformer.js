$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(300, 440, 200, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(300, 640, 200, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(50, 530, 200, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(550, 530, 200, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(630, 330, 200, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1000, 290, 50, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1300, 290, 50, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(300, 200, 50, 15); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1, 400, 50, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createCollectable("grace", 600, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("max", 1300, 100); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 100, 300,0,0); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCannon("left", 300, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 100, 3000); // cannon on left wall, 600px down, shooting once per second
    createCannon("right", 800, 1100); // cannon on left wall, 600px down, shooting once per second
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    
    
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)






    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
