//Global variables
//add objects,scene,camera and render
var scene, camera, renderer;
var geometry1,geometry2, material,material, mesh1,mesh2,border,i,j,k;


function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.SphereGeometry(200, 12, 12);
  material = new THREE.MeshNormalMaterial({color:"#DC143C"} );
  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.set(0,0,0);
  mesh1.position.z = -1000;



  // Add mesh to scene
  scene.add( mesh1 );


  geometry2= new THREE.SphereGeometry(250,8, 8);
  material2 = new THREE.MeshBasicMaterial( { wireframe:true,
    color: "#ff0001" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.set(1,1,1);
  mesh2.position.z = -800;

//Add mesh2 to scene
  scene.add( mesh2 );
//Create light
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(40,60,10);
  scene.add(spotLight);
}


// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.03; //Continuously rotate the mesh
  mesh1.rotation.y += 0.03;
  mesh2.rotation.x += 0.02; //Continuously rotate the mesh
  mesh2.rotation.y += 0.02;

//Define scene color
  renderer.setClearColor("#2A3867");

  // Render the scene
  renderer.render(scene, camera);
};


init();
geometry();
render();
