// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer,mesh;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;
var cubes=[];
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );
//create scene
	scene = new THREE.Scene();
//create camera and define
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
//create light
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );
//create objrcts materials,put textures on objtcts and define the number of objects
for(c=0;c<10;c++){
	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});


//create objects
	var geometry = new THREE.SphereGeometry( 30, 32, 16 );


  // modify UVs to accommodate MatCap texture
	var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
	for ( i = 0; i < faceVertexUvs.length; i ++ ) {
		var uvs = faceVertexUvs[ i ];
		var face = geometry.faces[ i ];
		for ( var j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}
	//Define objects scales and positions to make them on random
var cubescale=(Math.random()*-2)+1;
  mesh = new THREE.Mesh( geometry, material );
	mesh.position.x=Math.random()*-200+40;
	mesh.position.y=Math.random()*-100+50;
	mesh.scale.x=cubescale;
	mesh.scale.y=cubescale;
	mesh.scale.z=cubescale;
	scene.add( mesh );//Add mesh to scene
	cubes.push(mesh);//Put mesh to a group
};
//Add render
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}
//Make each eye face mouse with it change position
function render() {
	console.log(window.innerHeight)
	cubes.forEach(function(c,i){
	cubes[i].rotation.x = mouseY/window.innerHeight*2;
	cubes[i].rotation.y = mouseX/window.innerWidth*2;
});

	renderer.render( scene, camera );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
