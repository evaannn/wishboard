// this is the three js code for the staring eye.  
const {GLTFLoader} = THREE;
const { RGBELoader } = THREE;
const { RoughnessMipmapper } = THREE;

let camera, scene, renderer, eye, face, pointLight;

init();
render();

function init() {

  const container = document.createElement( 'div' );
  container.classList.add('canvas_container')
  document.querySelector('.main').appendChild( container );

  camera = new THREE.PerspectiveCamera( 55, 1, 0.25, 20 );
  camera.position.set( 0, 0, 3.7);

  scene = new THREE.Scene();

  pointLight = new THREE.PointLight( 0xffffff , 1.7, 2 );
  pointLight.position.set( 0, 0, 1 );
  scene.add( pointLight );

  let light = new THREE.AmbientLight( 0xffffff ); // cast rays 
  scene.add( light );

  new RGBELoader()
    .setDataType( THREE.UnsignedByteType )
    .load( './mod/bg.hdr', function ( texture ) {

      const envMap = pmremGenerator.fromEquirectangular( texture ).texture;

      scene.background = null;
 

      texture.dispose();
      pmremGenerator.dispose();

      render();

      const loader = new GLTFLoader();
      loader.load( './mod/1.gltf', function ( gltf ) {

        eye = gltf.scene

        scene.add( eye );

        render();

      } );

    } );

  renderer = new THREE.WebGLRenderer( { alpha: true } );
  renderer.setClearColor( 0x000000, 0 );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( 300, 300);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild( renderer.domElement );

  const pmremGenerator = new THREE.PMREMGenerator( renderer );
  pmremGenerator.compileEquirectangularShader();

  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

  camera.aspect = 1;
  camera.updateProjectionMatrix(); // calculate matrices on each light

  renderer.setSize( 300,300 );

  render();

}

function render() {
 	renderer.render( scene, camera );
	requestAnimationFrame( render );
}

document.addEventListener('mousemove', (e)=>{
  if (eye) {
    eye.rotation.set(((e.clientY+50)/window.innerHeight)-.5, (e.clientX/window.innerWidth)-.5, 0) // move on each window constant interval
  }
})

// dep
// const eyes = document.getElementById('canvas_container');
// 
// eyes.addEventListener('click', function(){
// alert('i see what youre doing buddy, dont try attacking the site');
// });