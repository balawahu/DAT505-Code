
//Global variables
var scene, camera, renderer, raycaster;
var geometry, geometry3, geometry7, material, material3, material7, mesh, mesh2, mesh3, mesh7, mesh6;
var cubes = [];
var rot = 0;
var container, stats, raycaster;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var container, stats;
var glowGroup1,glowGroup0;
var glowSphere1,glowSphere0;
var clickGroup = new THREE.Group();
var raycaster = new THREE.Raycaster();
var mouseVector = new THREE.Vector3();
var selectedObject = null;
//var skyBoxGeometry,skyBoxMaterial,skyBox;
var controls;
var isRemove = false;
const vertexShader = ['varying vec3 vNormal;', 'void main() {', 'vNormal = normalize( normalMatrix * normal );', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n')
const fragmentShader = ['uniform float c;', 'uniform float p;', 'varying vec3 vNormal;', 'void main() {', 'float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );', 'gl_FragColor = vec4( 0.2, 0.58, 0.9, 0.3 ) * intensity;', '}'].join('\n')
function init() {
  window.addEventListener("mousedown", onDocumentMouseDown, false);
  // Create an empty scene --------------------------
  //scene = new THREE.Scene();
  //var path = "../textures/";//设置路径
  //var directions  = ["star1", "star3", "star4"];//获取对象
  //var format = ".jpg";
  scene = new THREE.Scene();
  scene.add(clickGroup);
  scene.background = new THREE.CubeTextureLoader()//add skybox and put pictures on it
    .setPath('textures//')
    .load(['star.jpg', 'star1.jpg', 'star2.jpg', 'star3.jpg', 'star4.jpg', 'star5.jpg']);

  // Create a basic perspective camera --------------
  //camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );
  var W = window.innerWidth,
    H = window.innerHeight;
  //create camera and define its position
  camera = new THREE.PerspectiveCamera(45, W / H, .1, 50000);
  camera.position.set(-1000, -1000, 85);
  camera.lookAt(scene.position);

  let light = new THREE.PointLight(0xffffff, 2, 100);
  light.position.set(-10, 0, -1000);
  this.object3D = light;
  // Create a renderer with Antialiasing ------------
  //  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  //renderer.setClearColor("#000000");

  // Configure renderer size
  //renderer.setSize( window.innerWidth, window.innerHeight );
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x17293a);//define background colour
  renderer.setSize(W, H);

  // Append Renderer to DOM
  document.body.appendChild(renderer.domElement);

  glowGroup1 = new THREE.Group();
  let sphere1 = new THREE.SphereGeometry(200, 40, 40)
  let materialGlow1 = new THREE.ShaderMaterial({
    uniforms: {
      'c': { type: 'f', value: 0.34 },
      'p': { type: 'f', value: 9.17 }
    },
    vertexShader,
    fragmentShader
  });
  glowSphere1 = new THREE.Mesh(sphere1, materialGlow1);
  glowSphere1.material.side = THREE.BackSide
  glowSphere1.material.transparent = true;
  glowSphere1.scale.x = glowSphere1.scale.y = glowSphere1.scale.z = 3;
  glowSphere1.position.z = -1170;
  glowGroup1.add(glowSphere1);

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.SphereGeometry(300, 100, 100);
  var texture = new THREE.TextureLoader().load('textures/earth.jpg');
  var material = new THREE.MeshBasicMaterial({ map: texture });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -1000;
  //this.earth = geometry;
  scene.add(glowGroup1);
  clickGroup.add(glowGroup1);
  glowGroup0 = new THREE.Group()
  let sphere0 = new THREE.SphereGeometry(200, 40, 40)
  let materialGlow0= new THREE.ShaderMaterial({
    uniforms: {
      'c': { type: 'f', value: 0.34 },
      'p': { type: 'f', value: 9.17 }
    },
    vertexShader,
    fragmentShader
  });
  glowSphere0 = new THREE.Mesh(sphere0, materialGlow0)
  glowSphere0.material.side = THREE.BackSide
  glowSphere0.material.transparent = true;
  glowSphere0.scale.x = glowSphere0.scale.y = glowSphere0.scale.z = 0.9;
  glowGroup0.add(glowSphere0);
  geometry3 = new THREE.SphereGeometry(100, 100, 100);//create moon
  var texture = new THREE.TextureLoader().load('textures/moon.jpg');
  var material3 = new THREE.MeshBasicMaterial({ map: texture });
  mesh3 = new THREE.Mesh(geometry3, material3);
  glowGroup0.add(mesh3);
  // scene.add(mesh3);
  clickGroup.add(glowGroup0);
//rotation center
  geometry7 = new THREE.SphereGeometry(10, 100, 100);
  material7 = new THREE.MeshNormalMaterial({ color: 0xf02376 });
  mesh7 = new THREE.Mesh(geometry7, material7);
  mesh7.position.z = 0;
  scene.add(mesh7);
  clickGroup.add(mesh7);

  geometry14 = new THREE.SphereGeometry(10, 100, 100);
  material14 = new THREE.MeshNormalMaterial({ color: 0xf02376 });
  mesh14 = new THREE.Mesh(geometry7, material7);
  mesh14.position.z = 0;
  scene.add(mesh14);
  clickGroup.add(mesh14);


  geometry8 = new THREE.SphereGeometry(10, 100, 100);
  material8 = new THREE.MeshNormalMaterial({ color: 0xf02376 });
  mesh8 = new THREE.Mesh(geometry7, material7);
  mesh8.position.z = 0;
  scene.add(mesh8);
  mesh8.add(mesh);
  glowGroup1.add(mesh8);
  clickGroup.add(glowGroup1);

//create firestar
  var geometry5 = new THREE.SphereGeometry(200, 100, 100);
  var texture = new THREE.TextureLoader().load('textures/firestar.jpg');
  var material5 = new THREE.MeshBasicMaterial({ map: texture });
  mesh5 = new THREE.Mesh(geometry5, material5);
  //mesh5.position.y = -400;
  mesh5.position.x = -550;
  mesh5.position.z = 0;
  scene.add(mesh5);
  mesh7.add(mesh5);

//water star
  var geometry6 = new THREE.SphereGeometry(250, 100, 100);
  var texture = new THREE.TextureLoader().load('textures/waterstar.jpg');
  var material6 = new THREE.MeshBasicMaterial({ map: texture });
  mesh6 = new THREE.Mesh(geometry6, material6);
  mesh6.position.y = -500;
  mesh6.position.x = 900;
  mesh6.position.z = 300;
  scene.add(mesh6);
  clickGroup.add(mesh6);
//star
  var geometry10 = new THREE.SphereGeometry(120, 100, 100);
  var texture = new THREE.TextureLoader().load('textures/starstar.jpg');
  var material10 = new THREE.MeshBasicMaterial({ map: texture });
  mesh10 = new THREE.Mesh(geometry10, material10);
  //mesh10.position.y = -500;
  mesh10.position.x = -1100;
  mesh10.position.z = 550;
  scene.add(mesh10);
  clickGroup.add(mesh10);
//bubble star
  var geometry15 = new THREE.SphereGeometry(120, 100, 100);
  var texture = new THREE.TextureLoader().load('textures/bubblestar.png');
  var material15 = new THREE.MeshBasicMaterial({ map: texture });
  mesh15 = new THREE.Mesh(geometry15, material15);
  //mesh10.position.y = -500;
  mesh15.position.x = 1100;
  mesh15.position.z = -550;
  scene.add(mesh15);

//rotation center
  geometry14 = new THREE.SphereGeometry(10, 100, 100);
  material = new THREE.MeshNormalMaterial({ color: 0xf02376 });
  mesh14 = new THREE.Mesh(geometry14, material14);
  mesh14.position.z = 0;
  scene.add(mesh14);
  mesh14.add(mesh10, mesh15);
  clickGroup.add(mesh14);
//bluestar
  var geometry13 = new THREE.SphereGeometry(180, 100, 100);
  var texture = new THREE.TextureLoader().load('textures/bluestar.png');
  var material13 = new THREE.MeshBasicMaterial({ map: texture });
  mesh13 = new THREE.Mesh(geometry13, material13);
  mesh13.position.x = -1150;
  mesh13.position.z = 0;
  //mesh13.position.x = -800;
  //mesh13.position.z = 350;
  scene.add(mesh13);
  //mesh16.add(mesh13);
//rotation center
  geometry16 = new THREE.SphereGeometry(10, 100, 100);
  material16 = new THREE.MeshNormalMaterial({ color: 0xf02376 });
  mesh16 = new THREE.Mesh(geometry16, material16);
  mesh16.position.z = 0;
  scene.add(mesh16);
  mesh16.add(mesh13);
  clickGroup.add(mesh16);
//fingerstar
  var geometry11 = new THREE.SphereGeometry(350, 100, 100);
  var texture = new THREE.TextureLoader().load('textures/fingerstar.png');
  var material11 = new THREE.MeshBasicMaterial({ map: texture });
  mesh11 = new THREE.Mesh(geometry11, material11);
  mesh11.position.y = -500;
  mesh11.position.x = 1500;
  mesh11.position.z = 0;
  scene.add(mesh11);

//rotation center
  geometry12 = new THREE.SphereGeometry(10, 100, 100);
  material12 = new THREE.MeshNormalMaterial({ color: 0xf02376 });
  mesh12 = new THREE.Mesh(geometry12, material12);
  mesh12.position.z = 0;
  scene.add(mesh12);
  mesh12.add(mesh11);
  clickGroup.add(mesh12);
  geometry9 = new THREE.SphereGeometry(10, 100, 100);
  material9 = new THREE.MeshNormalMaterial({ color: 0xf02376 });
  mesh9 = new THREE.Mesh(geometry9, material9);
  mesh9.position.z = 0;
  scene.add(mesh9);
  mesh9.add(mesh6);
  clickGroup.add(mesh9);

  document.getElementById("UI").style.visibility = "visible";


  var material4 = new THREE.MeshPhongMaterial({ color: 0xffffff, overdraw: true });


  //Settings for models and material
  var geometry1 = new THREE.CubeGeometry(1, 1, 1);
  //geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
  var material1 = new THREE.MeshBasicMaterial({
    color: 0xC0FF3E
  });



  //Geometry to store all buildings of the city
  var cityGeometry = new THREE.Geometry();
  for (var i = 0; i < 1500; i++) {
    //Create geometry as a clone
    var building = new THREE.Mesh(geometry1.clone());

    //Randomize position and scale of the buildings
    building.position.x = Math.floor(Math.random() * 200 - 100) * 20;
    building.position.z = Math.floor(Math.random() * 200 - 100) * 20;
    building.scale.x = Math.pow(Math.random(), 2) * 50 + 10;
    building.scale.y = Math.pow(Math.random(), 3) * building.scale.x * 8 + 8;
    building.scale.z = building.scale.x;

    //Merge all buildings to one model - cityGeometry
    THREE.GeometryUtils.merge(cityGeometry, building);
  }

  //Mesh of the city
  var city = new THREE.Mesh(cityGeometry, material4);
  //city.rotation.y = +0.01;
  //Cast shadows of the models
  //city.castShadow = true;
  //city.receiveShadow = true;
  scene.add(city);


//rotation small stones with random position
  var geometry2 = new THREE.SphereGeometry(7, 3, 3);//
  for (var i = 0; i < 1500; i++) {
    var texture2 = new THREE.TextureLoader().load('textures/stone2.jpg');
    var material2 = new THREE.MeshBasicMaterial({ map: texture2 });//材料
    var mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.x = (Math.random() - 0.5) * 2500;
    mesh2.position.y = (Math.random() - 0.5) * 1000;
    mesh2.position.z = (Math.random() - 0.5) * 1500;
    scene.add(mesh2);
    mesh3.add(mesh2);
  }
//add fog
  scene.fog = new THREE.FogExp2(0xffff00, 0.0002);

  //create objects
  //var geometry1 = new THREE.SphereGeometry( 30, 32, 16 );

  //  console.log("X:" +x+ ",Y : " +y+ ",Z:" +z);
  //console.log(mesh);
  // Add mesh to scene
  scene.add(mesh3);
  //cubes.push(mesh1);
  cubes.push(mesh2);
  //mesh5.add(mesh7);
  //console.log(cubes);
  //document.body.appendChild(renderer.domElement);
  //Add controller values for GUI
  //Set preset values for controllers
  controls = new THREE.OrbitControls(camera, renderer.domElement);//control camera angle
//control page on earth
  var controller = new function () {
    //this.scaleX=1;
    //this.scaleY=1;
    //  this.scaleZ=1;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = -400;
    this.rotationX = 1;
    this.rotationY = 1;
    this.rotationZ = 1;
  }

  //Create a new DAT.GUI
  var gui = new dat.GUI();

  //Define the folder name
  //var f1=gui.addFolder('Scale');
  var f2 = gui.addFolder('Position');
  var f3 = gui.addFolder('Rotation');


  f2.add(controller, 'positionX', -500, 500).onChange(function () {
    mesh.position.x = (controller.positionX);

  });
  f2.add(controller, 'positionY', -500, 500).onChange(function () {
    mesh.position.y = (controller.positionY);


  });
  f2.add(controller, 'positionZ', -5000, 200).onChange(function () {
    mesh.position.z = (controller.positionZ);
  });
  f3.add(controller, 'rotationX', -180, 180).onChange(function () {
    mesh.rotation.x = (controller.rotationX);
    //mesh3.rotation.x=(controller.rotationX);
    //  mesh1.rotation.x=(controller.rotationX);
  });
  f3.add(controller, 'rotationY', -180, 180).onChange(function () {
    //mesh.rotation.y=(controller.rotationY);
    mesh.rotation.y = (controller.rotationY);
    //  mesh1.rotation.y=(controller.rotationY);

  });
  f3.add(controller, 'rotationZ', -180, 180).onChange(function () {
    mesh.rotation.z = (controller.rotationZ);

  });
  console.log(scene);
}
// Render Loop
var render = function () {
  requestAnimationFrame(render);

//rotation function on objects
  mesh.rotation.x += 0.01; //Continuously rotate the mesh
  mesh.rotation.y += 0.01;
  //mesh3.rotation.x -= 0.01;
  mesh3.rotation.y -= 0.03;
  mesh5.rotation.x += 0.1;
  mesh6.rotation.x -= 0.06;
  mesh7.rotation.y += 0.06;
  mesh16.rotation.y -= 0.06;
  glowGroup1.rotation.x += 0.02;
  mesh10.rotation.z += 0.03;
  mesh11.rotation.z -= 0.05;
  mesh9.rotation.x += 0.02; //Continuously rotate the mesh
  mesh9.rotation.y += 0.04;
  mesh12.rotation.x += 0.04; //Continuously rotate the mesh
  mesh12.rotation.y += 0.06;
  mesh13.rotation.z += 0.1;
  mesh14.rotation.y -= 0.06;
  mesh14.rotation.x += 0.01; //Continuously rotate the mesh
  mesh14.rotation.y += 0.06;

  //document.body.appendChild(renderer.domElement);
  //function drawFrame(){
  //requestAnimationFrame(drawFrame);
  //renderer.render(scene, camera);
  function animate() {
    requestAnimationFrame(animate);

    render();
    //stats.update();
  }

  //rot += 0.01;
  /*  mesh2.forEach(function(mesh2,i) {
      rot += 0.01;
    mesh2.rotation.x = rot;
    mesh2.rotation.y = rot;
  mesh2.scale.x = rot;
  });*/

  //var intersects = raycaster.intersectObjects( mesh, true );

  //if ( intersects.length > 0 ) {
  //if ( INTERSECTED != intersects[ 0 ].mesh ) {
  //  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  //  INTERSECTED = intersects[ 0 ].mesh;
  //  INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
  //  INTERSECTED.material.emissive.setHex( 0xff0000 );
  //  }
  //} else {
  //if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  //INTERSECTED = null;
  //}
  //  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  //mesh2.rotation.y += 0.01;
  //renderer.setClearColor("#99CCFF");
  //raycaster.setFromCamera(mouse );
  // Render the scene

  renderer.render(scene, camera);
};

function onDocumentMouseDown(event) {
  event.preventDefault();
  if (selectedObject) {
    selectedObject = null;
  }

  var intersects = getIntersects(event.layerX, event.layerY);
  if (intersects.length > 0) {
    var res = intersects.filter(function (res) {
      return res && res.object;
    })[0];
    if (res && res.object) {
      selectedObject = res.object;
      // 3FADB874-7BAA-4C87-AB4A-CEE529286E76
      console.log(selectedObject);

      if (selectedObject.uuid ==
        mesh.uuid) {
        if (!isRemove) {
          isRemove = !isRemove;
          glowGroup1.remove(glowSphere1);
        } else {
          isRemove = !isRemove;
          glowGroup1.add(glowSphere1);
        }
      }

      if (selectedObject.uuid ==
        mesh6.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/0.jpg");
      }

      if (selectedObject.uuid ==
        mesh11.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/1.jpg");
      }

      if (selectedObject.uuid ==
        mesh13.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/2.jpg");
      }

      if (selectedObject.uuid ==
        mesh14.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/3.jpg");
      }

      if (selectedObject.uuid ==
        mesh10.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/4.jpg");
      }
      if (selectedObject.uuid ==
        mesh5.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/5.jpg");
      }
      if (selectedObject.uuid ==
        mesh6.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/6.jpg");
      }

      if (selectedObject.uuid ==
        mesh15.uuid) {
        $(".ui-dialog").show();
        $(".calssImg").attr("src", "./images/7.jpg");
      }
      // selectedObject.material.color.set("#f00");
    }
  }
}
function getIntersects(x, y) {
  x = (x / window.innerWidth) * 2 - 1;
  y = - (y / window.innerHeight) * 2 + 1;
  mouseVector.set(x, y, 0.5);
  raycaster.setFromCamera(mouseVector, camera);
  return raycaster.intersectObject(clickGroup, true);
}



init();
//drawFrame();
render();
