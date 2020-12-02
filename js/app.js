// voeg controls erbij 
const controls = new Controls(50);
controls.enebleMovement();

//create a model
const minecraftModel = new model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.54, -5);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

/*
//create a model
const greekModel = new Model('assets/models/minecraft/scene.gltf');
greekModel.setPosition(4.05045, -1.83083, -5,56861);
greekModel.setScale(0.2, 0.2, 0.2);
greekModel.setRotation(0.3, 0.3, 0.3);
*/
// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

//create some text
const testText = new Text('MediaCollege Amsterdam WebXR');
testText.setPosition(1.4, 3.3, -5.2);
testText.setScale(3,3,3);

//create an image
const image = new XRImage('../assets/images/Lisse-049.jpg');
image.setPosition(-7.55248, 5.63318, -13.22348);
image.setScale(20,20,20);

//create a 360 image
const image360 = new Sky ('../assets/lam.jpg');

//listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt nu op mij'));