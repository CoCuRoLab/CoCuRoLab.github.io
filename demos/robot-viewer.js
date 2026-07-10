import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  DirectionalLight,
  AmbientLight,
  Mesh,
  PlaneGeometry,
  ShadowMaterial,
  PCFSoftShadowMap,
  Box3,
  Vector3,
  LoadingManager,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import URDFLoader from 'urdf-loader';

document.querySelectorAll('.robot-viewer[data-urdf]').forEach(initViewer);

function initViewer(container) {
  const urdfPath = container.dataset.urdf;

  const scene = new Scene();
  const bg = getComputedStyle(document.documentElement)
    .getPropertyValue('--background-alt')
    .trim();
  scene.background = new Color(bg || '#1c1c1c');

  const camera = new PerspectiveCamera(45, 1, 0.01, 100);
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const light = new DirectionalLight(0xffffff, 1.2);
  light.position.set(5, 10, 7);
  light.castShadow = true;
  light.shadow.mapSize.setScalar(1024);
  scene.add(light);
  scene.add(new AmbientLight(0xffffff, 0.5));

  const ground = new Mesh(
    new PlaneGeometry(50, 50),
    new ShadowMaterial({ opacity: 0.25 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.2;
  controls.addEventListener('start', () => {
    controls.autoRotate = false;
    hint.setAttribute('data-hidden', '');
  });

  const hint = document.createElement('div');
  hint.className = 'demo-hint';
  hint.textContent = 'Drag to rotate · Scroll to zoom';
  container.appendChild(hint);

  const loadingEl = document.createElement('div');
  loadingEl.className = 'demo-loading';
  loadingEl.textContent = 'Loading robot…';
  container.appendChild(loadingEl);

  const manager = new LoadingManager();
  const loader = new URDFLoader(manager);
  let robot;
  loader.load(
    urdfPath,
    (result) => { robot = result; },
    undefined,
    () => { loadingEl.textContent = 'Could not load robot model.'; }
  );

  manager.onLoad = () => {
    loadingEl.remove();
    robot.traverse((c) => { c.castShadow = true; });
    scene.add(robot);

    const box = new Box3().setFromObject(robot);
    const size = new Vector3();
    box.getSize(size);
    const center = new Vector3();
    box.getCenter(center);

    robot.position.y -= box.min.y;
    const radius = size.length() || 1;

    camera.position.set(
      center.x + radius * 0.8,
      center.y + radius * 0.6,
      center.z + radius * 0.8
    );
    controls.target.set(center.x, center.y + size.y * 0.3, center.z);
    controls.minDistance = radius * 0.4;
    controls.maxDistance = radius * 3;
    controls.update();
  };

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  new ResizeObserver(resize).observe(container);
  resize();

  (function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  })();
}
