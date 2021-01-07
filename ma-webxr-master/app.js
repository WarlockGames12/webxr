// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(-0.181, 3.732, -12.027);
minecraftModel.setScale(0.055, 0.049, 0.050);
minecraftModel.setRotation(0.55, -2.394, 0);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-0.115, 0.91001, -6.459);
cuberoom.setScale(0.903, 0.838, 0.933);
cuberoom.setRotation(0, 3.381, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('red');
sphere.setRadius(0.45);
sphere.setPosition(0, 6, -6.5);

// create some text
const testText = new Text('WebXr gemaakt door: Thies van der Zon en Dirk ten Have');
testText.setPosition(5, 5, -1);
testText.setFontsize(4);
testText.setRotation(0, 270, 0);

const credits = new Text('Opdracht voor het Lisse Art Museum');
credits.setPosition(5, 3, -1);
credits.setFontsize(4);
credits.setRotation(0, 270, 0);

const credits1 = new Text('Opdrachtgever: Lisse Art Museum');
credits1.setPosition(5, 2, -1);
credits1.setFontsize(4);
credits1.setRotation(0, 270, 0);

// create an image
const image = new XRImage('assets/images/Lisse-049.jpg');
image.setPosition(2.512, 2.592, -11.194);
image.setRotation(-0, 5.977, -0.605);
image.setScale(2.289, 1.987, 0.017);
//Folkert

const Folkert = new XRImage('assets/images/FolkertdeJong.jpg');
Folkert.setPosition(-2.845, 2.592, -10.868);
Folkert.setRotation(-0, 5.977, -0.605);
Folkert.setScale(2.289, 1.987, 0.017)
// vrouw met baby

const vrouwmetbaby = new XRImage('../assets/images/Lisse-004.png')
vrouwmetbaby.setPosition(-0.2, 2.592, -10.315);
vrouwmetbaby.setRotation(-0, 5.977, -0.605);
vrouwmetbaby.setScale(2.289, 1.987, 0.017);

// tafel met kunst
const Tafelmetkunst = new XRImage('../assets/images/Lisse-art.jpg')
Tafelmetkunst.setPosition(4.2824, 3.05, -7.227);
Tafelmetkunst.setRotation(-0.019, -88.0417, -0.605);
Tafelmetkunst.setScale(2.215, 1.54, 0.2);

const ruiken = new XRImage('../assets/images/Lisse-003.png')
ruiken.setPosition(4.2824, 3.05, -4);
ruiken.setRotation(-0.019, -88.0417, -0.605);
ruiken.setScale(2.215, 1.54, 0.2);

const potten = new XRImage('../assets/images/Lisse-006.png')
potten.setPosition(-3.9, 2.592, -8.220);
potten.setRotation(-0, 90, -0.605);
potten.setScale(2.289, 1.987, 0.017);

const poppen = new XRImage('../assets/images/Lisse-001.png')
poppen.setPosition(-3.9, 2.592, -4.220);
poppen.setRotation(-0, 90, -0.605);
poppen.setScale(2.289, 1.987, 0.017);

const ingang = new XRImage('../assets/images/GateMuzeum.png')
ingang.setPosition(0.1, 3.4, -1.75);
ingang.setRotation(-0, 2.75, 0);
ingang.setScale(9, 5, 0.017);

const deur1 = new XRImage('../assets/images/Linkerdeur.png')
deur1.setPosition(0.1, 3.4, -1.75);
deur1.setRotation(-0, 2.75, 0);
deur1.setScale(9, 5, 0.017);

const deur2 = new XRImage('../assets/images/Rechterdeur.png')
deur2.setPosition(2, 2, -4);
deur2.setRotation(180, 270, 0);
deur2.setScale(9, 5, 1);



// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
// minecraftModel.addEventListener('click', () => alert('je klikt op mij'));

// const lucht = new Sky ('../assets/images/Lisse-ingang.jpg');

const paintModel = new model('assets/models/minecraft/source/paintcan.blend')
paintModel.setPosition(-2, 3, -3);
paintModel.setScale(0.05, 0.05, 0.05);
paintModel.setRotation(0, -36.95, 0);

Folkert.addEventListener('click', () => 
    document.getElementById('extraText').innerText= "Kunstwerk van Folkert de Jong");

    
// document.querySelector('#yourHotspot').addEventListener('mouseenter', function () {
//             document.querySelector('Folkert kunstwerk').setAttribute('visible', true);