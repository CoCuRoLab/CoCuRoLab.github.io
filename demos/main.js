import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LoadingManager } from 'three';
import URDFLoader from 'urdf-loader';



var camera, scene, renderer;
var geometry, material, mesh;

var container = document.getElementById('cube');


function init() {
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10 );
	camera.position.z = 3;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xffffff );

	geometry = new THREE.SphereGeometry( 1 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true } );

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	// document.body.appendChild( renderer.domElement );	
	container.appendChild(renderer.domElement);
			
			
}

function onWindowResize() {
	var width = container.clientWidth;
	var height = container.clientHeight;
  
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height);
  }



function animate( time ) {
	requestAnimationFrame( animate );
	mesh.rotation.x = time * 0.0005;
	mesh.rotation.y = time * 0.001;

	renderer.render( scene, camera );

}

init();
onWindowResize();
const controls = new OrbitControls( camera, renderer.domElement );
window.addEventListener("resize", onWindowResize);
animate();
