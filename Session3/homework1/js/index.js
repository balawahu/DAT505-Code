//Global variables
var scene, camera, renderer;
var geometry1,geometry2,geometry3,geometry4, material1, material2,material3,material4,mesh,mesh2,mesh3,mesh4;
var geometry5,geometry6,geometry7,material5,material6,material7,mesh5,mesh6,mesh7;
var geometry8,geometry9,material8,material9,mesh8,mesh9;
var geometry10,geometry11,geometry12,geometry13,material10,material11,material12,material13,mesh10,mesh11,mesh12,mesh13;
var geometry14,geometry15,material14,material15,mesh14,mesh15;
var geometry16,geometry17,geometry18,material16,material17,material18,mesh16,mesh17,mesh18;
var geometry19,geometry20,geometry21,material19,material20,material21,mesh19,mesh20,mesh21;
var geometry22,geometry23,geometry24,geometry25,geometry26,material22,material23,material24,material25,material26,mesh22,mesh23,mesh24,mesh25,mesh26;
function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#0A0A0A");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}
//Create objects in this project
function geometry(){
  // Configure lights -------------------------------
  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);

  // Create a Cube Mesh with basic material ---------
  var geometry1 = new THREE.BoxGeometry(10, 500, 500);
var geometry2 = new THREE.BoxGeometry(50, 50, 50);
var geometry3 = new THREE.BoxGeometry(70, 50, 50);
var geometry4 = new THREE.BoxGeometry(50, 90, 90);
var geometry5 = new THREE.BoxGeometry(30, 90, 90);
var geometry6 = new THREE.BoxGeometry(50, 50, 50 );
var geometry7 = new THREE.BoxGeometry(120, 130, 120 );
var geometry8 = new THREE.BoxGeometry(50, 50, 195 );
var geometry9 = new THREE.BoxGeometry(50, 200, 50 );
var geometry10 = new THREE.BoxGeometry(50, 150, 20 );
var geometry11 = new THREE.BoxGeometry(50, 30, 498 );
var geometry12 = new THREE.BoxGeometry(50, 32, 52 );
var geometry13 = new THREE.BoxGeometry(50, 270, 55 );
var geometry14 = new THREE.BoxGeometry(50, 270, 55 );
var geometry15 = new THREE.BoxGeometry(50, 85, 140);
var geometry16 = new THREE.BoxGeometry(50, 50, 50);
var geometry17 = new THREE.BoxGeometry(50, 60, 50);
var geometry18 = new THREE.BoxGeometry(50, 25, 20);
var geometry19= new THREE.BoxGeometry(50, 307, 40);
var geometry20= new THREE.BoxGeometry(50, 250, 55);
var geometry21= new THREE.BoxGeometry(50, 150, 97);
var geometry22= new THREE.BoxGeometry(50, 155, 97);
var geometry23= new THREE.BoxGeometry(50, 170, 20);
var geometry24= new THREE.BoxGeometry(50, 170, 20);
var geometry25= new THREE.TorusBufferGeometry(350, 3, 16,100);
var geometry26= new THREE.TorusBufferGeometry(350, 3, 16,100);

//Add more details of materials to different geometries
  //MATERIAL 1:
  var material1 = new THREE.MeshNormalMaterial();
//MATERIAL 2:
  var material2 = new THREE.MeshBasicMaterial({
      color: "#F4A460",

      });
    var material3 = new THREE.MeshBasicMaterial({
          color: "#FA8072",

          });
var material4 = new THREE.MeshBasicMaterial({
        color: "#76EEC6",

});
var material5 = new THREE.MeshBasicMaterial({
        color: "#8968CD",

});
var material6 = new THREE.MeshBasicMaterial( {
   color: "#C0FF3E"
  } );
  var material7 = new THREE.MeshBasicMaterial({
          color: "#C1FFC1",

  });
  var material8 = new THREE.MeshBasicMaterial({
          color: "#EE7AE9",

  });
  var material9 = new THREE.MeshBasicMaterial({
          color: "#EE2C2C",

  });
  var material10 = new THREE.MeshBasicMaterial({
          color: "#FAFAD2",

  });
  var material11 = new THREE.MeshBasicMaterial({
          color: "#FFEC8B",

  });
  var material12 = new THREE.MeshBasicMaterial({
          color: "#FFDEAD",

  });
  var material13 = new THREE.MeshBasicMaterial({
          color: "#BFEFFF",

  });
  var material14 = new THREE.MeshBasicMaterial({
          color: "#CD2990",

  });
  var material15 = new THREE.MeshBasicMaterial({
          color: "#CD4F39",

  });
  var material16 = new THREE.MeshBasicMaterial({
          color: "#EEE8AA",

  });
  var material17 = new THREE.MeshBasicMaterial({
          color: "#EEA9B8",

  });
  var material18 = new THREE.MeshBasicMaterial({
          color: "#EEC900",

  });
  var material19 = new THREE.MeshBasicMaterial({
          color: "#EEB422",

  });
  var material20 = new THREE.MeshBasicMaterial({
          color: "#FF6347",

  });
  var material21 = new THREE.MeshBasicMaterial({
          color: "#DDA0DD",

  });
  var material22 = new THREE.MeshBasicMaterial({
          color: "#EE5C42",

  });
  var material23 = new THREE.MeshBasicMaterial({
          color: "#FFF68F",

  });

  var material25 = new THREE.MeshBasicMaterial( { wireframe:true,
  color: "#EAEAEA"
} );

var material26 = new THREE.MeshBasicMaterial( { wireframe:true,
color: "#EAEAEA"
} );
  //MATERIAL 3:
  /*
  var material = new THREE.MeshLambertMaterial({
    color: "#433F81",
    transparent: true,
    opacity: 1
  });
  */

//MATERIAL 4:
//var material = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 5 (non-shiny material):
/*
var material = new THREE.MeshLambertMaterial({
  color: 0xF3FFE2,
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
*/

/*
//MATERIAL 6 (shiny material):
var material = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});
*/

/*
//MATERIAL 7 (combination of shiny + non-shinny):
var material = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});
*/

/*
//MATERIAL 8 (physical-based material)
var material = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
*/

//Add position and material to the geometry through create mesh
mesh = new THREE.Mesh( geometry1, material1 );
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = -1000;

mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.x = 30;
mesh2.position.y = 0;
mesh2.position.z = -1000;

mesh3 = new THREE.Mesh( geometry3, material3 );
mesh3.position.x = 30;
mesh3.position.y = 50;
mesh3.position.z = -1000;

mesh4 = new THREE.Mesh( geometry4, material4);
mesh4.position.x = 30;
mesh4.position.y = 122.5;
mesh4.position.z = -1000;

mesh5 = new THREE.Mesh( geometry5, material5);
mesh5.position.x = 100;
mesh5.position.y = 32;
mesh5.position.z = -1000;

mesh6 = new THREE.Mesh( geometry6, material6);
mesh6.position.x = 100;
mesh6.position.y = 102;
mesh6.position.z = -1000;

mesh7 = new THREE.Mesh( geometry7, material7);
mesh7.position.x = -56;
mesh7.position.y = 10;
mesh7.position.z = -1000;

mesh8 = new THREE.Mesh( geometry8, material8);
mesh8.position.x = 153;
mesh8.position.y = -30;
mesh8.position.z = -1000;

mesh9 = new THREE.Mesh( geometry9, material9);
mesh9.position.x = 171;
mesh9.position.y = 95;
mesh9.position.z = -1000;

mesh10 = new THREE.Mesh( geometry10, material10);
mesh10.position.x = 135;
mesh10.position.y = 152;
mesh10.position.z = -1000;

mesh11 = new THREE.Mesh( geometry11, material11);
mesh11.position.x = 0;
mesh11.position.y = -70;
mesh11.position.z = -1000;

mesh12 = new THREE.Mesh( geometry12, material12);
mesh12.position.x = 30;
mesh12.position.y = -40;
mesh12.position.z = -1000;

mesh13 = new THREE.Mesh( geometry13, material13);
mesh13.position.x = 223;
mesh13.position.y = 115;
mesh13.position.z = -1000;

mesh14 = new THREE.Mesh( geometry14, material14);
mesh14.position.x = -40;
mesh14.position.y = 115;
mesh14.position.z = -1000;

mesh15 = new THREE.Mesh( geometry15, material15);
mesh15.position.x = 55;
mesh15.position.y = 210;
mesh15.position.z = -1000;

mesh16 = new THREE.Mesh( geometry16, material16);
mesh16.position.x = 100;
mesh16.position.y = 150;
mesh16.position.z = -1000;

mesh17 = new THREE.Mesh( geometry17, material17);
mesh17.position.x = 170;
mesh17.position.y = 225;
mesh17.position.z = -1000;

mesh18 = new THREE.Mesh( geometry18, material18);
mesh18.position.x = 135;
mesh18.position.y = 240;
mesh18.position.z = -1000;

mesh19 = new THREE.Mesh( geometry19, material19);
mesh19.position.x = -135;
mesh19.position.y = 98;
mesh19.position.z = -1000;

mesh20 = new THREE.Mesh( geometry20, material20);
mesh20.position.x = -90;
mesh20.position.y = 125;
mesh20.position.z = -1000;

mesh21 = new THREE.Mesh( geometry21, material21);
mesh21.position.x = -205;
mesh21.position.y = 20;
mesh21.position.z = -1000;

mesh22 = new THREE.Mesh( geometry22, material22);
mesh22.position.x = -205;
mesh22.position.y = 170;
mesh22.position.z = -1000;

mesh23 = new THREE.Mesh( geometry23, material23);
mesh23.position.x = -105;
mesh23.position.y = -165;
mesh23.position.z = -1000;

mesh24 = new THREE.Mesh( geometry24, material23);
mesh24.position.x = 85;
mesh24.position.y = -165;
mesh24.position.z = -1000;

mesh25 = new THREE.Mesh( geometry25, material25);
mesh25.position.set(0,0,-1000);

mesh26 = new THREE.Mesh( geometry26, material26);
mesh26.position.set(0,0,-1000);

// ------------------------------------------------
// Add mesh to scene
scene.add( mesh );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4);
scene.add( mesh5);
scene.add( mesh6);
scene.add( mesh7);
scene.add( mesh8);
scene.add( mesh9);
scene.add( mesh10);
scene.add( mesh11);
scene.add( mesh12);
scene.add( mesh13);
scene.add( mesh14);
scene.add( mesh15);
scene.add( mesh16);
scene.add( mesh17,mesh25,mesh26);
scene.add( mesh18,mesh23,mesh24);
scene.add( mesh19,mesh20,mesh21,mesh22);
}

//Add controller values for GUI
//Set preset values for controllers
  var controller=new function(){
    this.rotationX=1;
    this.rotationY=1;
    this.rotationZ=1;
  }
  //Create a new DAT.GUI
var gui=new dat.GUI();

//Define the folder name
var f1=gui.addFolder('Rotation');

//Add controller for rotation X
f1.add(controller,'rotationX',-10,10).onChange( function() {
  mesh.rotation.x=(controller.rotationX);
mesh2.rotation.x=(controller.rotationX);
mesh3.rotation.x=(controller.rotationX);
mesh4.rotation.x=(controller.rotationX);
mesh5.rotation.x=(controller.rotationX);
mesh6.rotation.x=(controller.rotationX);
mesh7.rotation.x=(controller.rotationX);
mesh8.rotation.x=(controller.rotationX);
mesh9.rotation.x=(controller.rotationX);
mesh10.rotation.x=(controller.rotationX);
mesh11.rotation.x=(controller.rotationX);
mesh12.rotation.x=(controller.rotationX);
mesh13.rotation.x=(controller.rotationX);
mesh14.rotation.x=(controller.rotationX);
mesh15.rotation.x=(controller.rotationX);
mesh16.rotation.x=(controller.rotationX);
mesh17.rotation.x=(controller.rotationX);
mesh18.rotation.x=(controller.rotationX);
mesh19.rotation.x=(controller.rotationX);
mesh20.rotation.x=(controller.rotationX);
mesh21.rotation.x=(controller.rotationX);
mesh22.rotation.x=(controller.rotationX);
mesh23.rotation.x=(controller.rotationX);
mesh24.rotation.x=(controller.rotationX);

});
//Add controller for each object on rotation Y
f1.add(controller,'rotationY',-10,10).onChange( function() {
  mesh.rotation.y=(controller.rotationY);
mesh2.rotation.y=(controller.rotationY);
mesh3.rotation.y=(controller.rotationY);
mesh4.rotation.y=(controller.rotationY);
mesh5.rotation.y=(controller.rotationY);
mesh6.rotation.y=(controller.rotationY);
mesh7.rotation.y=(controller.rotationY);
mesh8.rotation.y=(controller.rotationY);
mesh9.rotation.y=(controller.rotationY);
mesh10.rotation.y=(controller.rotationY);
mesh11.rotation.y=(controller.rotationY);
mesh12.rotation.y=(controller.rotationY);
mesh13.rotation.y=(controller.rotationY);
mesh14.rotation.y=(controller.rotationY);
mesh15.rotation.y=(controller.rotationY);
mesh16.rotation.y=(controller.rotationY);
mesh17.rotation.y=(controller.rotationY);
mesh18.rotation.y=(controller.rotationY);
mesh19.rotation.y=(controller.rotationY);
mesh20.rotation.y=(controller.rotationY);
mesh21.rotation.y=(controller.rotationY);
mesh22.rotation.y=(controller.rotationY);
mesh23.rotation.y=(controller.rotationY);
mesh24.rotation.y=(controller.rotationY);

});
//Add controller for rotation Z on different geometries
f1.add(controller,'rotationZ',-10,10).onChange( function() {
  mesh.rotation.z=(controller.rotationZ);
mesh2.rotation.z=(controller.rotationZ);
mesh3.rotation.z=(controller.rotationZ);
mesh4.rotation.z=(controller.rotationZ);
mesh5.rotation.z=(controller.rotationZ);
mesh6.rotation.z=(controller.rotationZ);
mesh7.rotation.z=(controller.rotationZ);
mesh8.rotation.z=(controller.rotationZ);
mesh9.rotation.z=(controller.rotationZ);
mesh10.rotation.z=(controller.rotationZ);
mesh11.rotation.z=(controller.rotationZ);
mesh12.rotation.z=(controller.rotationZ);
mesh13.rotation.z=(controller.rotationZ);
mesh14.rotation.z=(controller.rotationZ);
mesh15.rotation.z=(controller.rotationZ);
mesh16.rotation.z=(controller.rotationZ);
mesh17.rotation.z=(controller.rotationZ);
mesh18.rotation.z=(controller.rotationZ);
mesh19.rotation.z=(controller.rotationZ);
mesh20.rotation.z=(controller.rotationZ);
mesh21.rotation.z=(controller.rotationZ);
mesh22.rotation.z=(controller.rotationZ);
mesh23.rotation.z=(controller.rotationZ);
mesh24.rotation.z=(controller.rotationZ);

});



// Render Loop
var render = function () {
  requestAnimationFrame( render );
//Add rotation to geometry
  mesh25.rotation.x += 0.01; //Continuously rotate the mesh
  mesh25.rotation.y += 0.01;

  mesh26.rotation.x -= 0.01; //Continuously rotate the mesh
  mesh26.rotation.y -= 0.01;


  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
