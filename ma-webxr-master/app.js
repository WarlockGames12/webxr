// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(-2, 1.75, -3);
minecraftModel.setScale(0.05, 0.05, 0.05);
minecraftModel.setRotation(0, -36.95, 0);


// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-2.50535, 0.91001, -3.21484);
cuberoom.setScale(0.5, 0.6, 0.4);
cuberoom.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('red');
sphere.setRadius(0.45);
sphere.setPosition(-4, 2, -4.5);

// create some text
const testText = new Text('WebXr van Thies en Dirk');
testText.setPosition(2, 5, -3);
testText.setFontsize(10);
testText.setRotation(0, -36.95, 0);

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-2.5, 2.25, -4);
image.setRotation(0, -36.95, 0);

//monke
const monke = new XRImage('assets/images/monke1.png');
monke.setPosition(-2.5, 3.5, -4);
monke.setRotation(0, -36.95, 0);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => alert('je klikt op mij'));

// const lucht = new Sky ('../assets/images/Lisse-ingang.jpg');

const paintModel = new model('assets/models/minecraft/source/paintcan.blend')
paintModel.setPosition(-2, 3, -3);
paintModel.setScale(0.05, 0.05, 0.05);
paintModel.setRotation(0, -36.95, 0);
