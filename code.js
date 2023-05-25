var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fec554a4-6ed6-4be2-a179-c19119216706","4157a225-1145-42f7-acf2-50723ed9d9d7","b8de55b4-8e21-40fc-9c4c-27ac8d8b1a05"],"propsByKey":{"fec554a4-6ed6-4be2-a179-c19119216706":{"name":"foguete","sourceUrl":null,"frameSize":{"x":332,"y":282},"frameCount":1,"looping":true,"frameDelay":12,"version":"bE88n4jEx4UGXGf49d2JCP1IDjRzxHOg","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":282},"rootRelativePath":"assets/fec554a4-6ed6-4be2-a179-c19119216706.png"},"4157a225-1145-42f7-acf2-50723ed9d9d7":{"name":"plano_de_fundo","sourceUrl":null,"frameSize":{"x":800,"y":450},"frameCount":1,"looping":true,"frameDelay":12,"version":"nD7LvRU7LgHK6nlghTtYDe4FgQ9p8BVM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":450},"rootRelativePath":"assets/4157a225-1145-42f7-acf2-50723ed9d9d7.png"},"b8de55b4-8e21-40fc-9c4c-27ac8d8b1a05":{"name":"planeta","sourceUrl":null,"frameSize":{"x":400,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"jPBqHkgvdvDsNk8O.A4ZeSOSBF.yeNEi","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":394},"rootRelativePath":"assets/b8de55b4-8e21-40fc-9c4c-27ac8d8b1a05.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var plano_de_fundo = createSprite(200, 200);
plano_de_fundo.setAnimation("plano_de_fundo");

var planeta = createSprite(60, 110);
planeta.setAnimation("planeta");
planeta.scale = 0.3;

var foguete = createSprite(340, 380);
foguete.setAnimation("foguete");
foguete.scale = 0.2;
function draw() {
  drawSprites();
  if (keyDown("space")) {
    foguete.velocityY = -10;
    foguete.velocityX = -10;
  }
  if (foguete.y < 260) {
    foguete.velocityY = -1;
    foguete.velocityX = -1;
  }
  if (foguete.x < 40){
    foguete.velocityY = 0;
    foguete.velocityX = 0;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
