var renderer, scene, camera;
var controls;
function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0,1000,0);
  ambLight.add(spotLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

 controls = new THREE.OrbitControls(camera,renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <=10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
  for (var y = -10; y < =10; y += 5) {
    for (var z = -10; z <= 10; z += 5) {


    //Concatenation of the x and y values (open Console to see)
    console.log("X:"+x+",Y:"+y+",Z:"+z);


      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
//The color of the material is assigned a random color

   if (  x >=0  && y >=0  && z >=0){
//x >= 0 this means that squares with values 0 and 5 are true
//y >= 0 this means that squares with values 0 and 5 are true
//z >= 0 this means that squares with values 0 and 5 are true
 boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
} else if( x <=0 &&  y>=0  &&  z>= 0){
  boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
} else if ( x <=0 &&  y>=0  &&  z>= 0){
    boxMaterial = new THREE.MeshLambertMaterial({color:0xF0F0F0});
} else if ( x <=0 &&  y<=0  &&  z>= 0){
  boxMaterial = new THREE.MeshLambertMaterial({color:0xF0F0F0});
}  else if ( x <=0 &&  y<=0  &&  z>= 0){
    boxMaterial = new THREE.MeshLambertMaterial({color:0xF0F0F0});
  }  else if ( x <=0 &&  y>=0  &&  z<= 0){
      boxMaterial = new THREE.MeshLambertMaterial({color:0xF0F0F0});
    }  else if ( x <=0 &&  y>=0  &&  z<= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color:0xF25756});
      }  else if ( x <=0 &&  y<=0  &&  z<= 0){
          boxMaterial = new THREE.MeshLambertMaterial({color:0xF60720});
}


    var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = 0;
      mesh.position.y = y;
      mesh.scale.y = 0.5;
      scene.add(mesh);
  }
}
}

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);
  renderer.render(scene, camera);
}

init();
drawFrame();
