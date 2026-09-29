import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { createCyberOperative } from './CharacterModel';
import { STAGES_DATA, THEMED_ZONES } from '../data/stagesData';
import { sound } from './AudioSynthesizer';
import { Compass, Eye, Navigation, Crosshair, Sparkles, UserCheck, Maximize2, Minimize2, ZoomIn, ZoomOut, MapPin, Trees } from 'lucide-react';

// Helper to create 3D Rotating Holographic Station Number Badges
function createStationNumberBadge(number, zoneColorHex) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Outer Neon Circle Ring
  ctx.strokeStyle = zoneColorHex;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(128, 128, 115, 0, Math.PI * 2);
  ctx.stroke();

  // Dark Semi-transparent Glass Core
  ctx.fillStyle = 'rgba(6, 11, 24, 0.92)';
  ctx.beginPath();
  ctx.arc(128, 128, 110, 0, Math.PI * 2);
  ctx.fill();

  // Inner Dashed Tech Ring
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 4;
  ctx.setLineDash([10, 6]);
  ctx.beginPath();
  ctx.arc(128, 128, 92, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Station Number
  ctx.fillStyle = zoneColorHex;
  ctx.font = 'bold 88px "Orbitron", "Fira Code", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const numStr = number < 10 ? `0${number}` : `${number}`;
  ctx.fillText(numStr, 128, 118);

  // Label "STAGE"
  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 24px "Orbitron", sans-serif';
  ctx.fillText('STAGE', 128, 176);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const badgeGroup = new THREE.Group();

  // Dual-sided 3D Disc Mesh
  const discGeom = new THREE.CylinderGeometry(1.05, 1.05, 0.08, 32);
  discGeom.rotateX(Math.PI / 2);
  const discMat = new THREE.MeshStandardMaterial({
    map: texture,
    color: 0xffffff,
    emissive: new THREE.Color(zoneColorHex),
    emissiveIntensity: 0.5,
    roughness: 0.2,
    metalness: 0.8
  });
  const disc = new THREE.Mesh(discGeom, discMat);
  badgeGroup.add(disc);

  // Outer Glowing Orbit Ring
  const orbitGeom = new THREE.TorusGeometry(1.3, 0.035, 8, 32);
  const orbitMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(zoneColorHex) });
  const orbit = new THREE.Mesh(orbitGeom, orbitMat);
  badgeGroup.add(orbit);

  return { group: badgeGroup, orbit, disc };
}

// Procedural Organic Cyber Grass Texture Generator
function createGrassCanvasTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Rich organic mossy dark emerald gradient
  const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 360);
  grad.addColorStop(0, '#103d21');
  grad.addColorStop(0.5, '#0b2b17');
  grad.addColorStop(1, '#06170d');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Multi-tone grass patches
  const greens = ['#14532d', '#166534', '#15803d', '#22c55e', '#0f3a1e'];
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 2.8 + 0.8;
    ctx.fillStyle = greens[Math.floor(Math.random() * greens.length)];
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Individual grass blade strokes
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const len = Math.random() * 9 + 4;
    const angle = Math.random() * Math.PI * 2;
    ctx.strokeStyle = Math.random() > 0.8 ? '#4ade80' : '#16a34a';
    ctx.lineWidth = Math.random() * 1.6 + 0.6;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    ctx.stroke();
  }

  // Subtle glowing bio-luminescent cyber-veins
  ctx.strokeStyle = 'rgba(0, 243, 255, 0.15)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 20; i++) {
    const startX = Math.random() * 512;
    const startY = Math.random() * 512;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + (Math.random() * 50 - 25), startY + (Math.random() * 50 - 25));
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(20, 20);
  return texture;
}

// Stylized Interactive Cyber Tree Generator
function createCyberTree(type = 'oak', scale = 1, themeColor = 0x22c55e) {
  const treeGroup = new THREE.Group();

  // 1. Trunk
  const trunkGeom = new THREE.CylinderGeometry(0.28 * scale, 0.65 * scale, 4.2 * scale, 8);
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x1f140e,
    roughness: 0.9,
    metalness: 0.1
  });
  const trunk = new THREE.Mesh(trunkGeom, trunkMat);
  trunk.position.y = (4.2 * scale) / 2;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  treeGroup.add(trunk);

  // Glowing Cyber Rings on Trunk
  const ringGeom = new THREE.TorusGeometry(0.42 * scale, 0.04 * scale, 6, 16);
  ringGeom.rotateX(Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
  const ring1 = new THREE.Mesh(ringGeom, ringMat);
  ring1.position.y = 1.2 * scale;
  treeGroup.add(ring1);

  // 2. Foliage Group (sways with wind)
  const foliageGroup = new THREE.Group();
  foliageGroup.position.y = 3.6 * scale;

  const foliageMat1 = new THREE.MeshStandardMaterial({
    color: themeColor,
    roughness: 0.4,
    metalness: 0.2,
    flatShading: true
  });
  const foliageMat2 = new THREE.MeshStandardMaterial({
    color: themeColor === 0x22c55e ? 0x15803d : (themeColor === 0xf43f5e ? 0xbe123c : 0x0284c7),
    roughness: 0.5,
    metalness: 0.1,
    flatShading: true
  });

  if (type === 'pine') {
    // 3 Conical Tiers
    [
      { r: 2.2 * scale, h: 2.5 * scale, y: 0.2 * scale },
      { r: 1.7 * scale, h: 2.2 * scale, y: 1.6 * scale },
      { r: 1.1 * scale, h: 1.8 * scale, y: 3.0 * scale }
    ].forEach((tier, i) => {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(tier.r, tier.h, 7), i % 2 === 0 ? foliageMat1 : foliageMat2);
      cone.position.y = tier.y;
      cone.castShadow = true;
      foliageGroup.add(cone);
    });
  } else {
    // Dodecahedral Multi-cluster Canopy
    const cluster1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.8 * scale, 1), foliageMat1);
    cluster1.position.set(0, 0.4 * scale, 0);
    cluster1.castShadow = true;
    foliageGroup.add(cluster1);

    const cluster2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.3 * scale, 1), foliageMat2);
    cluster2.position.set(0.6 * scale, 1.2 * scale, 0.3 * scale);
    cluster2.castShadow = true;
    foliageGroup.add(cluster2);

    const cluster3 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1 * scale, 1), foliageMat1);
    cluster3.position.set(-0.5 * scale, 1.3 * scale, -0.4 * scale);
    cluster3.castShadow = true;
    foliageGroup.add(cluster3);
  }

  // 3. Hanging Bioluminescent Fruits/Lanterns
  const lanternMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
  for (let i = 0; i < 3; i++) {
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.14 * scale, 8, 8), lanternMat);
    const angle = (i / 3) * Math.PI * 2;
    lantern.position.set(Math.cos(angle) * 1.4 * scale, 0.2 * scale, Math.sin(angle) * 1.4 * scale);
    foliageGroup.add(lantern);
  }

  treeGroup.add(foliageGroup);
  return { mesh: treeGroup, foliage: foliageGroup };
}

// GTA-Style Circular Radar Drawing Routine
function drawGtaRadar(ctx, width, height, playerX, playerZ, playerRotY, activeStageId, radarRange, sweepAngle) {
  const centerX = width / 2;
  const centerY = height / 2;
  const radarRadius = Math.min(centerX, centerY) - 8;

  ctx.clearRect(0, 0, width, height);

  // 1. Circular Clip
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radarRadius, 0, Math.PI * 2);
  ctx.clip();

  // Dark Translucent Radar Glass Background
  ctx.fillStyle = 'rgba(5, 10, 22, 0.94)';
  ctx.fillRect(0, 0, width, height);

  // Subtle Background Radial Gradient
  const bgGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radarRadius);
  bgGrad.addColorStop(0, 'rgba(0, 243, 255, 0.08)');
  bgGrad.addColorStop(0.8, 'rgba(6, 14, 30, 0.6)');
  bgGrad.addColorStop(1, 'rgba(3, 7, 18, 0.98)');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Concentric Distance Grid Rings
  const scale = radarRadius / radarRange;
  [15, 30, 45].forEach((dist) => {
    const r = dist * scale;
    if (r < radarRadius) {
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  });

  // Crosshairs
  ctx.strokeStyle = 'rgba(0, 243, 255, 0.12)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX - radarRadius, centerY);
  ctx.lineTo(centerX + radarRadius, centerY);
  ctx.moveTo(centerX, centerY - radarRadius);
  ctx.lineTo(centerX, centerY + radarRadius);
  ctx.stroke();

  // 3. World Boundary Ring (Radius 52)
  const boundaryDist = 52 * scale;
  const boundX = centerX - playerX * scale;
  const boundZ = centerY - playerZ * scale;
  ctx.strokeStyle = 'rgba(0, 243, 255, 0.35)';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 3]);
  ctx.beginPath();
  ctx.arc(boundX, boundZ, boundaryDist, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // 4. Rotating 360° Radar Sweep Beam
  const sweepGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, radarRadius);
  sweepGrad.addColorStop(0, 'rgba(0, 255, 136, 0.25)');
  sweepGrad.addColorStop(1, 'rgba(0, 255, 136, 0)');
  ctx.fillStyle = sweepGrad;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radarRadius, sweepAngle - 0.45, sweepAngle);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#00ff88';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + Math.cos(sweepAngle) * radarRadius, centerY + Math.sin(sweepAngle) * radarRadius);
  ctx.stroke();

  // 5. Draw 20 Station Blips (with Edge Clamping)
  STAGES_DATA.forEach((stage) => {
    const dx = (stage.position.x - playerX) * scale;
    const dz = (stage.position.z - playerZ) * scale;
    const dist = Math.sqrt(dx * dx + dz * dz);
    const zone = THEMED_ZONES.find(z => z.id === stage.zoneId) || { color: '#00f3ff' };
    const isTarget = stage.id === activeStageId;

    if (dist <= radarRadius - 10) {
      // In-bounds station blip
      const blipX = centerX + dx;
      const blipY = centerY + dz;

      // Glow halo
      ctx.fillStyle = zone.color + '45';
      ctx.beginPath();
      ctx.arc(blipX, blipY, isTarget ? 10 : 7, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.fillStyle = zone.color;
      ctx.beginPath();
      ctx.arc(blipX, blipY, isTarget ? 5 : 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Number badge
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${stage.id}`, blipX, blipY - 8);
    } else {
      // Edge-clamped blip with directional pointer
      const angle = Math.atan2(dz, dx);
      const edgeX = centerX + Math.cos(angle) * (radarRadius - 7);
      const edgeY = centerY + Math.sin(angle) * (radarRadius - 7);

      ctx.fillStyle = zone.color;
      ctx.beginPath();
      ctx.arc(edgeX, edgeY, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // 6. Center Player Icon (GTA-style rotating arrowhead)
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(-playerRotY + Math.PI); // Inverted Three.js yaw to 2D screen

  // Player pulse ring
  ctx.strokeStyle = '#00f3ff';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, 8, 0, Math.PI * 2);
  ctx.stroke();

  // Sharp Arrowhead
  ctx.fillStyle = '#00f3ff';
  ctx.beginPath();
  ctx.moveTo(0, -9);
  ctx.lineTo(6, 7);
  ctx.lineTo(0, 4);
  ctx.lineTo(-6, 7);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
  ctx.restore(); // End Circular Clip

  // 7. Outer Bezel & Compass Notches
  ctx.strokeStyle = '#00f3ff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radarRadius, 0, Math.PI * 2);
  ctx.stroke();

  // North Indicator
  ctx.fillStyle = '#ff0055';
  ctx.font = 'bold 12px "Orbitron", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('N', centerX, centerY - radarRadius + 14);

  // E, S, W
  ctx.fillStyle = '#64748b';
  ctx.font = 'bold 10px "Orbitron", sans-serif';
  ctx.fillText('E', centerX + radarRadius - 8, centerY + 4);
  ctx.fillText('S', centerX, centerY + radarRadius - 4);
  ctx.fillText('W', centerX - radarRadius + 8, centerY + 4);
}

export default function CyberWorld3D({
  activeStageId,
  onSelectStage,
  characterGender = 'female',
  characterName = 'رقية وسام',
  characterColor = '#00f3ff'
}) {
  const mountRef = useRef(null);
  const [cameraMode, setCameraMode] = useState('follow'); // 'follow', 'free'
  const [hoveredStage, setHoveredStage] = useState(null);
  const [proximityPrompt, setProximityPrompt] = useState(null);
  const [currentLocationName, setCurrentLocationName] = useState('Central Plaza');

  // GTA MiniMap State & Refs
  const [radarZoom, setRadarZoom] = useState(55);
  const [isRadarExpanded, setIsRadarExpanded] = useState(false);
  const [isRadarHidden, setIsRadarHidden] = useState(false);
  const [playerCoords, setPlayerCoords] = useState({ x: 0, z: 0 });

  const radarCanvasRef = useRef(null);
  const radarSweepAngleRef = useRef(0);
  const radarZoomRef = useRef(55);

  useEffect(() => {
    radarZoomRef.current = radarZoom;
  }, [radarZoom]);

  // References
  const sceneRef = useRef(null);
  const operativeRef = useRef(null);
  const targetPosRef = useRef(new THREE.Vector3(0, 0, 0));
  const isMovingRef = useRef(false);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const pedestalsRef = useRef([]);
  const lastCooldownStageRef = useRef(null);
  const proximityCooldownTimerRef = useRef(null);

  // Initialize and recreate world or update character on gender/name change
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x060913);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 5, 10);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.minDistance = 2.0;
    controls.maxDistance = 90;
    controls.target.set(0, 1.8, 0);
    controlsRef.current = controls;

    // 5. Bright & Dynamic Lighting
    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x090d16, 2.8);
    scene.add(hemiLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainDirectional = new THREE.DirectionalLight(0x00f3ff, 3.8);
    mainDirectional.position.set(30, 45, 25);
    mainDirectional.castShadow = true;
    scene.add(mainDirectional);

    const rimPinkLight = new THREE.DirectionalLight(0xff0055, 2.4);
    rimPinkLight.position.set(-30, 20, -25);
    scene.add(rimPinkLight);

    // Character Dedicated Follow Spotlight
    const charSpot = new THREE.PointLight(0xffffff, 4.5, 30);
    charSpot.position.set(0, 8, 2);
    scene.add(charSpot);

    // 6. Lush Grassy Cyber Ground & Flora
    const grassTexture = createGrassCanvasTexture();
    const groundGeom = new THREE.PlaneGeometry(240, 240);
    const groundMat = new THREE.MeshStandardMaterial({
      map: grassTexture,
      color: 0x1b4324, // Deep lush emerald green tone
      roughness: 0.88,
      metalness: 0.08
    });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Subtle Holographic Pathway Grid on top of the grass
    const gridHelper = new THREE.GridHelper(200, 100, 0x00f3ff, 0x14532d);
    gridHelper.position.y = 0.02;
    gridHelper.material.opacity = 0.22;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // 7. Background Cyber Towers
    const towerGroup = new THREE.Group();
    const towerGeom = new THREE.BoxGeometry(4.5, 1, 4.5);
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 60 + (i % 4) * 12;
      const h = 20 + (i % 7) * 8;
      const tMat = new THREE.MeshStandardMaterial({
        color: 0x0d1527,
        roughness: 0.2,
        metalness: 0.8
      });
      const tower = new THREE.Mesh(towerGeom, tMat);
      tower.scale.set(1.2 + (i % 3) * 0.8, h, 1.2 + (i % 3) * 0.8);
      tower.position.set(
        Math.cos(angle) * radius,
        h / 2,
        Math.sin(angle) * radius
      );
      towerGroup.add(tower);

      const crown = new THREE.Mesh(
        new THREE.BoxGeometry(tower.scale.x * 4.2, 0.6, tower.scale.z * 4.2),
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x00f3ff : 0xa855f7 })
      );
      crown.position.set(tower.position.x, h, tower.position.z);
      towerGroup.add(crown);
    }
    scene.add(towerGroup);

    // 7.5 Tactical Cyber Monoliths & Boundary Barricades (with Solid Collision)
    const obstacles = [];
    const monolithGeom = new THREE.BoxGeometry(3.2, 7.5, 3.2);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x09101d,
      roughness: 0.2,
      metalness: 0.85
    });

    const monolithPositions = [
      { x: -28, z: -12 }, { x: -28, z: 12 },
      { x: -12, z: -35 }, { x: 12, z: -35 },
      { x: 35, z: -8 },   { x: 35, z: 8 },
      { x: -8, z: 35 },   { x: 8, z: 35 },
      { x: -22, z: -25 }, { x: 22, z: -25 },
      { x: -22, z: 25 },  { x: 22, z: 25 },
      { x: 0, z: -46 },   { x: 0, z: 46 },
      { x: -46, z: 0 },   { x: 46, z: 0 }
    ];

    monolithPositions.forEach((pos, idx) => {
      const mono = new THREE.Mesh(monolithGeom, monolithMat);
      mono.position.set(pos.x, 3.75, pos.z);
      mono.castShadow = true;
      mono.receiveShadow = true;
      scene.add(mono);

      // Glowing Neon Core Ring
      const neonCore = new THREE.Mesh(
        new THREE.BoxGeometry(3.3, 0.4, 3.3),
        new THREE.MeshBasicMaterial({ color: idx % 2 === 0 ? 0x00f3ff : 0xff0055 })
      );
      neonCore.position.set(pos.x, 3.75, pos.z);
      scene.add(neonCore);

      obstacles.push({ x: pos.x, z: pos.z, radius: 2.2 });
    });

    // Holographic Cyber Boundary Fence (Arena radius: 52)
    const fenceGeom = new THREE.CylinderGeometry(52, 52, 2.5, 64, 1, true);
    const fenceMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const fence = new THREE.Mesh(fenceGeom, fenceMat);
    fence.position.y = 1.25;
    scene.add(fence);

    // 7.6 Stylized Cyber Trees & Natural Flora (with Solid Trunk Collisions)
    const animatedTrees = [];
    const treeTypes = ['oak', 'pine', 'sakura', 'willow'];
    const treeColors = [0x22c55e, 0x15803d, 0x16a34a, 0xf43f5e, 0x06b6d4];

    // Strategic tree coordinates across the park terrain avoiding stations
    const treePositions = [
      { x: -38, z: -15 }, { x: -32, z: -35 }, { x: -18, z: -38 }, { x: -8, z: -25 },
      { x: 5, z: -32 },   { x: 18, z: -38 },  { x: 28, z: -32 },  { x: 38, z: -22 },
      { x: 42, z: -5 },   { x: 42, z: 15 },   { x: 35, z: 32 },   { x: 28, z: 42 },
      { x: 12, z: 45 },   { x: -15, z: 42 },  { x: -30, z: 32 },  { x: -42, z: 18 },
      { x: -42, z: -5 },  { x: -25, z: 12 },  { x: -12, z: 15 },  { x: 8, z: 12 },
      { x: 22, z: -5 },   { x: -5, z: -2 },   { x: 14, z: -2 },   { x: -18, z: -12 },
      { x: 15, z: 32 },   { x: -28, z: -2 },  { x: 28, z: 5 },    { x: -2, z: 22 },
      { x: -38, z: 28 },  { x: 38, z: 22 },   { x: -5, z: 45 },   { x: 2, z: -40 },
      { x: -15, z: -18 }, { x: 16, z: -18 }
    ];

    treePositions.forEach((pos, idx) => {
      const type = treeTypes[idx % treeTypes.length];
      const color = treeColors[idx % treeColors.length];
      const scale = 0.85 + (idx % 4) * 0.15;
      const tree = createCyberTree(type, scale, color);
      tree.mesh.position.set(pos.x, 0, pos.z);
      scene.add(tree.mesh);

      // Add tree trunk to solid obstacle collisions
      obstacles.push({ x: pos.x, z: pos.z, radius: 1.1 * scale });

      // Add to animated trees for wind sway
      animatedTrees.push({
        foliage: tree.foliage,
        swaySpeed: 1.2 + (idx % 3) * 0.4,
        phase: idx * 0.85
      });
    });

    // 7.7 Floating Bioluminescent Fireflies / Spores
    const fireflies = [];
    const fireflyGeom = new THREE.SphereGeometry(0.09, 6, 6);
    const ffColors = [0x4ade80, 0x00f3ff, 0xfde047, 0xf43f5e];
    for (let i = 0; i < 60; i++) {
      const ffMat = new THREE.MeshBasicMaterial({ color: ffColors[i % ffColors.length] });
      const ff = new THREE.Mesh(fireflyGeom, ffMat);
      const angle = Math.random() * Math.PI * 2;
      const dist = 5 + Math.random() * 42;
      const baseY = 0.5 + Math.random() * 3.5;
      ff.position.set(Math.cos(angle) * dist, baseY, Math.sin(angle) * dist);
      ff.userData = { baseY, speed: 1.5 + Math.random() * 1.5, offset: i };
      scene.add(ff);
      fireflies.push(ff);
    }

    // 8. 3D Character Avatar (Female or Male according to settings)
    const operative = createCyberOperative({
      gender: characterGender,
      colorTheme: characterColor,
      operatorName: characterName
    });
    operative.mesh.position.set(0, 0, 0);
    scene.add(operative.mesh);
    operativeRef.current = operative;
    targetPosRef.current.copy(operative.mesh.position);

    // -------------------------------------------------------------
    // -------------------------------------------------------------
    // ADVANCED MIXAMO FBX MULTI-CLIP ANIMATION RIG
    // -------------------------------------------------------------
    let femaleStandMesh = null;
    let femaleStandMixer = null;
    let femaleStandAction = null;

    let femaleWalkMesh = null;
    let femaleWalkMixer = null;
    let femaleWalkAction = null;

    let femalePlankMesh = null;
    let femalePlankMixer = null;
    let femalePlankAction = null;

    let maleStandMesh = null;
    let maleStandMixer = null;
    let maleStandAction = null;

    let maleRunMesh = null;
    let maleRunMixer = null;
    let maleRunAction = null;

    let maleCrawlMesh = null;
    let maleCrawlMixer = null;
    let maleCrawlAction = null;

    let isExternalFbxLoaded = false;
    let femaleIdleTimer = 0;
    let maleRunTimer = 0;
    let maleRestTimer = 0;
    let maleIsExhausted = false;
    let footstepTimer = 0;

    const fbxLoader = new FBXLoader();

    const baseModelPath = (file) => `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`;

    if (characterGender === 'female') {
      // 1. Female Standing Idle (Normal organized stance, NO T-Pose!)
      fbxLoader.load(
        baseModelPath('models/female_stand.fbx'),
        (fbx) => {
          femaleStandMesh = fbx;
          const bbox = new THREE.Box3().setFromObject(fbx);
          const size = new THREE.Vector3();
          bbox.getSize(size);
          const scaleFactor = size.y > 0 ? (2.3 / size.y) : 0.0125;
          femaleStandMesh.scale.setScalar(scaleFactor);

          femaleStandMesh.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          if (operative.mesh.children[0]) {
            operative.mesh.children[0].visible = false;
          }
          femaleStandMesh.visible = true;
          operative.mesh.add(femaleStandMesh);
          isExternalFbxLoaded = true;

          if (fbx.animations && fbx.animations.length > 0) {
            femaleStandMixer = new THREE.AnimationMixer(femaleStandMesh);
            femaleStandAction = femaleStandMixer.clipAction(fbx.animations[0]);
            femaleStandAction.play();
          }
        },
        undefined,
        () => {}
      );

      // 2. Female Walk Animation
      fbxLoader.load(
        baseModelPath('models/female_walk.fbx'),
        (fbx) => {
          femaleWalkMesh = fbx;
          const bbox = new THREE.Box3().setFromObject(fbx);
          const size = new THREE.Vector3();
          bbox.getSize(size);
          const scaleFactor = size.y > 0 ? (2.3 / size.y) : 0.0125;
          femaleWalkMesh.scale.setScalar(scaleFactor);

          femaleWalkMesh.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          femaleWalkMesh.visible = false;
          operative.mesh.add(femaleWalkMesh);

          if (fbx.animations && fbx.animations.length > 0) {
            femaleWalkMixer = new THREE.AnimationMixer(femaleWalkMesh);
            femaleWalkAction = femaleWalkMixer.clipAction(fbx.animations[0]);
          }
        },
        undefined,
        () => {}
      );

      // 3. Female Plank Animation (Idle > 5 seconds)
      fbxLoader.load(
        baseModelPath('models/female_idle.fbx'),
        (fbx) => {
          femalePlankMesh = fbx;
          const bbox = new THREE.Box3().setFromObject(fbx);
          const size = new THREE.Vector3();
          bbox.getSize(size);
          const scaleFactor = size.y > 0 ? (2.3 / size.y) : 0.0125;
          femalePlankMesh.scale.setScalar(scaleFactor);

          femalePlankMesh.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          femalePlankMesh.visible = false;
          operative.mesh.add(femalePlankMesh);

          if (fbx.animations && fbx.animations.length > 0) {
            femalePlankMixer = new THREE.AnimationMixer(femalePlankMesh);
            femalePlankAction = femalePlankMixer.clipAction(fbx.animations[0]);
          }
        },
        undefined,
        () => {}
      );
    } else {
      // MALE CHARACTER:
      // 1. Male Stand Hip Hop Dancing (Normal stylish stance, NO T-Pose!)
      fbxLoader.load(
        baseModelPath('models/male_stand.fbx'),
        (fbx) => {
          maleStandMesh = fbx;
          const bbox = new THREE.Box3().setFromObject(fbx);
          const size = new THREE.Vector3();
          bbox.getSize(size);
          const scaleFactor = size.y > 0 ? (2.4 / size.y) : 0.0125;
          maleStandMesh.scale.setScalar(scaleFactor);

          maleStandMesh.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          if (operative.mesh.children[0]) {
            operative.mesh.children[0].visible = false;
          }
          maleStandMesh.visible = true;
          operative.mesh.add(maleStandMesh);
          isExternalFbxLoaded = true;

          if (fbx.animations && fbx.animations.length > 0) {
            maleStandMixer = new THREE.AnimationMixer(maleStandMesh);
            maleStandAction = maleStandMixer.clipAction(fbx.animations[0]);
            maleStandAction.play();
          }
        },
        undefined,
        () => {}
      );

      // 2. Male Run Animation
      fbxLoader.load(
        baseModelPath('models/male_run.fbx'),
        (fbx) => {
          maleRunMesh = fbx;
          const bbox = new THREE.Box3().setFromObject(fbx);
          const size = new THREE.Vector3();
          bbox.getSize(size);
          const scaleFactor = size.y > 0 ? (2.4 / size.y) : 0.0125;
          maleRunMesh.scale.setScalar(scaleFactor);

          maleRunMesh.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          maleRunMesh.visible = false;
          operative.mesh.add(maleRunMesh);

          if (fbx.animations && fbx.animations.length > 0) {
            maleRunMixer = new THREE.AnimationMixer(maleRunMesh);
            maleRunAction = maleRunMixer.clipAction(fbx.animations[0]);
          }
        },
        undefined,
        () => {}
      );

      // 3. Male Crawl Animation when tired (>= 15s)
      fbxLoader.load(
        baseModelPath('models/male_crawl.fbx'),
        (fbx) => {
          maleCrawlMesh = fbx;
          const bbox = new THREE.Box3().setFromObject(fbx);
          const size = new THREE.Vector3();
          bbox.getSize(size);
          const scaleFactor = size.y > 0 ? (2.4 / size.y) : 0.0125;
          maleCrawlMesh.scale.setScalar(scaleFactor);

          maleCrawlMesh.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          maleCrawlMesh.visible = false;
          operative.mesh.add(maleCrawlMesh);

          if (fbx.animations && fbx.animations.length > 0) {
            maleCrawlMixer = new THREE.AnimationMixer(maleCrawlMesh);
            maleCrawlAction = maleCrawlMixer.clipAction(fbx.animations[0]);
          }
        },
        undefined,
        () => {}
      );
    }

    // 9. Create Milestone Waypoints with 3D Spinning Numbers
    const pedestals = [];
    STAGES_DATA.forEach((stage) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(stage.position.x, 0, stage.position.z);
      pGroup.userData = { stageId: stage.id, stageTitle: stage.titleAr, stageEn: stage.titleEn };

      const zone = THEMED_ZONES.find(z => z.id === stage.zoneId) || { color: '#00f3ff' };
      const zoneColor = new THREE.Color(zone.color);

      // Base Platform
      const baseGeom = new THREE.CylinderGeometry(1.8, 2.2, 0.5, 16);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x111c30,
        roughness: 0.3,
        metalness: 0.8
      });
      const base = new THREE.Mesh(baseGeom, baseMat);
      base.position.y = 0.25;
      base.receiveShadow = true;
      pGroup.add(base);

      // Glowing Base Ring
      const ringGeom = new THREE.RingGeometry(1.9, 2.2, 32);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({ color: zoneColor, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.y = 0.03;
      pGroup.add(ring);

      // Holographic Floating Crystal
      const crystalGeom = new THREE.OctahedronGeometry(0.8, 0);
      const crystalMat = new THREE.MeshStandardMaterial({
        color: zoneColor,
        emissive: zoneColor,
        emissiveIntensity: 1.6,
        roughness: 0.1,
        metalness: 0.8
      });
      const crystal = new THREE.Mesh(crystalGeom, crystalMat);
      crystal.position.y = 2.2;
      pGroup.add(crystal);

      // Vertical Light Beam
      const beamGeom = new THREE.CylinderGeometry(0.1, 0.1, 16, 8);
      const beamMat = new THREE.MeshBasicMaterial({
        color: zoneColor,
        transparent: true,
        opacity: 0.35
      });
      const beam = new THREE.Mesh(beamGeom, beamMat);
      beam.position.y = 8;
      pGroup.add(beam);

      // Point Light
      const pointLight = new THREE.PointLight(zoneColor, 2.0, 10);
      pointLight.position.y = 2.6;
      pGroup.add(pointLight);

      // 3D Spinning Holographic Number Badge (Above Crystal at y = 4.2)
      const numberBadgeObj = createStationNumberBadge(stage.id, zone.color);
      numberBadgeObj.group.position.y = 4.2;
      pGroup.add(numberBadgeObj.group);

      scene.add(pGroup);
      pedestals.push({
        group: pGroup,
        crystal,
        beam,
        numberBadge: numberBadgeObj.group,
        orbitRing: numberBadgeObj.orbit,
        stageId: stage.id,
        color: zoneColor
      });
    });
    pedestalsRef.current = pedestals;

    // 10. Raycasting Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        pedestals.map(p => p.group),
        true
      );

      if (intersects.length > 0) {
        let root = intersects[0].object;
        while (root.parent && root.parent !== scene) {
          root = root.parent;
        }
        if (root.userData && root.userData.stageId) {
          setHoveredStage(root.userData);
          renderer.domElement.style.cursor = 'pointer';
          return;
        }
      }
      setHoveredStage(null);
      renderer.domElement.style.cursor = 'default';
    };

    const handleClick = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        pedestals.map(p => p.group),
        true
      );

      if (intersects.length > 0) {
        let root = intersects[0].object;
        while (root.parent && root.parent !== scene) {
          root = root.parent;
        }
        if (root.userData && root.userData.stageId) {
          const clickedId = root.userData.stageId;
          sound.playSelect();
          moveToStage(clickedId);
          onSelectStage(clickedId);
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', handlePointerMove);
    renderer.domElement.addEventListener('click', handleClick);

    // 11. Keyboard Controls (WASD / Arrows & E for Interaction)
    const keysPressed = {};
    const handleKeyDown = (e) => {
      keysPressed[e.key.toLowerCase()] = true;
      if (e.key.toLowerCase() === 'e') {
        // Trigger currently hovered or nearest stage
        const charPos = operative.mesh.position;
        const nearest = pedestals.find(p => p.group.position.distanceTo(charPos) < 3.2);
        if (nearest) {
          sound.playSelect();
          onSelectStage(nearest.stageId);
        }
      }
    };
    const handleKeyUp = (e) => {
      keysPressed[e.key.toLowerCase()] = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // 12. Main Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Animate crystals and 3D Spinning Numbers
      pedestals.forEach((p, idx) => {
        p.crystal.rotation.y = elapsed * 1.0 + idx;
        p.crystal.rotation.x = Math.sin(elapsed * 1.5 + idx) * 0.25;
        p.crystal.position.y = 2.2 + Math.sin(elapsed * 2.5 + idx) * 0.25;

        // 3D Rotating Holographic Station Number
        p.numberBadge.rotation.y = elapsed * 1.5 + idx * 0.4;
        p.numberBadge.position.y = 4.2 + Math.sin(elapsed * 2.0 + idx) * 0.2;
        p.orbitRing.rotation.z += 0.03;
      });

      // Character Movement, Animation Timers & Collision Physics
      const charMesh = operative.mesh;
      const targetPos = targetPosRef.current;

      let moveX = 0;
      let moveZ = 0;
      if (keysPressed['w'] || keysPressed['arrowup']) moveZ -= 1;
      if (keysPressed['s'] || keysPressed['arrowdown']) moveZ += 1;
      if (keysPressed['a'] || keysPressed['arrowleft']) moveX -= 1;
      if (keysPressed['d'] || keysPressed['arrowright']) moveX += 1;

      const isManualMoving = moveX !== 0 || moveZ !== 0;
      const isAutoMoving = isMovingRef.current;
      const isMoving = isManualMoving || isAutoMoving;

      // Base move speeds (Male runs fast but crawls slowly when exhausted!)
      let currentSpeed = 14.0;

      // ==========================================
      // ANIMATION CONTROLLER (FEMALE & MALE)
      // ==========================================
      if (characterGender === 'female') {
        if (isMoving) {
          femaleIdleTimer = 0;
          if (femaleStandMesh) {
            femaleStandMesh.visible = false;
            if (femaleStandAction) femaleStandAction.stop();
          }
          if (femalePlankMesh) {
            femalePlankMesh.visible = false;
            if (femalePlankAction) femalePlankAction.stop();
          }
          if (femaleWalkMesh) femaleWalkMesh.visible = true;
          if (femaleWalkAction && !femaleWalkAction.isRunning()) {
            femaleWalkAction.play();
          }
          if (femaleWalkMixer) femaleWalkMixer.update(delta);
        } else {
          // Idle counter
          femaleIdleTimer += delta;
          if (femaleIdleTimer >= 5.0 && femalePlankMesh && femalePlankAction) {
            // Idle for 5 seconds -> START PLANK!
            if (femaleStandMesh) {
              femaleStandMesh.visible = false;
              if (femaleStandAction) femaleStandAction.stop();
            }
            if (femaleWalkMesh) {
              femaleWalkMesh.visible = false;
              if (femaleWalkAction) femaleWalkAction.stop();
            }
            femalePlankMesh.visible = true;
            if (!femalePlankAction.isRunning()) femalePlankAction.play();
            if (femalePlankMixer) femalePlankMixer.update(delta);
          } else {
            // Normal standing idle (Standing Idle.fbx) - NO T-POSE!
            if (femaleWalkMesh) {
              femaleWalkMesh.visible = false;
              if (femaleWalkAction) femaleWalkAction.stop();
            }
            if (femalePlankMesh) {
              femalePlankMesh.visible = false;
              if (femalePlankAction) femalePlankAction.stop();
            }
            if (femaleStandMesh) {
              femaleStandMesh.visible = true;
              if (femaleStandAction && !femaleStandAction.isRunning()) {
                femaleStandAction.play();
              }
              if (femaleStandMixer) femaleStandMixer.update(delta);
            }
            if (!isExternalFbxLoaded) operative.update(elapsed, 'idle', 0);
          }
        }
      } else {
        // MALE CHARACTER CONTROLLER
        if (isMoving) {
          maleRestTimer = 0;
          maleRunTimer += delta;

          if (maleStandMesh) {
            maleStandMesh.visible = false;
            if (maleStandAction) maleStandAction.stop();
          }

          if (maleRunTimer >= 15.0) {
            // Running for 15s continuously -> Exhausted crawl!
            maleIsExhausted = true;
            currentSpeed = 4.5; // Slow crawl
            if (maleRunMesh) {
              maleRunMesh.visible = false;
              if (maleRunAction) maleRunAction.stop();
            }
            if (maleCrawlMesh) maleCrawlMesh.visible = true;
            if (maleCrawlAction && !maleCrawlAction.isRunning()) maleCrawlAction.play();
            if (maleCrawlMixer) maleCrawlMixer.update(delta);
          } else {
            // Normal fast run
            currentSpeed = 16.0;
            if (maleCrawlMesh) {
              maleCrawlMesh.visible = false;
              if (maleCrawlAction) maleCrawlAction.stop();
            }
            if (maleRunMesh) maleRunMesh.visible = true;
            if (maleRunAction && !maleRunAction.isRunning()) maleRunAction.play();
            if (maleRunMixer) maleRunMixer.update(delta);
          }
        } else {
          // Stopped moving
          if (maleIsExhausted) {
            if (maleCrawlAction) maleCrawlAction.stop();
            maleRestTimer += delta;
            if (maleCrawlMesh) maleCrawlMesh.visible = true;
            if (maleCrawlMixer) maleCrawlMixer.update(delta * 0.2); // slight breathing in crawl pose

            if (maleRestTimer >= 5.0) {
              // Rested for 5 seconds -> recovered stamina back to dancing stand!
              maleIsExhausted = false;
              maleRunTimer = 0;
              maleRestTimer = 0;
              if (maleCrawlMesh) maleCrawlMesh.visible = false;
              if (maleStandMesh) {
                maleStandMesh.visible = true;
                if (maleStandAction && !maleStandAction.isRunning()) maleStandAction.play();
              }
            }
          } else {
            // Normal standing: Hip Hop Dancing stand! NO T-POSE!
            maleRunTimer = 0;
            if (maleRunMesh) {
              maleRunMesh.visible = false;
              if (maleRunAction) maleRunAction.stop();
            }
            if (maleCrawlMesh) {
              maleCrawlMesh.visible = false;
              if (maleCrawlAction) maleCrawlAction.stop();
            }
            if (maleStandMesh) {
              maleStandMesh.visible = true;
              if (maleStandAction && !maleStandAction.isRunning()) maleStandAction.play();
              if (maleStandMixer) maleStandMixer.update(delta);
            }
          }
          if (!isExternalFbxLoaded) operative.update(elapsed, 'idle', 0);
        }
      }

      // Footstep Sound Generation while moving
      if (isMoving) {
        footstepTimer += delta;
        const stepRate = (characterGender === 'male' && maleIsExhausted) ? 0.65 : (characterGender === 'male' ? 0.28 : 0.42);
        if (footstepTimer >= stepRate) {
          footstepTimer = 0;
          const sType = (characterGender === 'male' && maleIsExhausted) ? 'crawl' : (characterGender === 'male' ? 'run' : 'walk');
          sound.playFootstep(sType);
        }
      } else {
        footstepTimer = 0;
      }

      // ==========================================
      // SOLID COLLISION PHYSICS (NO PENETRATION!)
      // ==========================================
      const canMoveTo = (nx, nz) => {
        // 1. Boundary of arena (max radius 52)
        if (Math.sqrt(nx * nx + nz * nz) > 52.0) return false;

        // 2. Obstacles (Tactical Monoliths, Barriers)
        for (let i = 0; i < obstacles.length; i++) {
          const obs = obstacles[i];
          const dx = nx - obs.x;
          const dz = nz - obs.z;
          const minDist = obs.radius + 0.7; // Character collision radius
          if (dx * dx + dz * dz < minDist * minDist) {
            return false; // Hit solid building!
          }
        }
        return true;
      };

      if (isManualMoving) {
        const moveVec = new THREE.Vector3(moveX, 0, moveZ).normalize().multiplyScalar(delta * currentSpeed);
        const nextX = charMesh.position.x + moveVec.x;
        const nextZ = charMesh.position.z + moveVec.z;

        // Try direct movement, or slide along walls
        if (canMoveTo(nextX, nextZ)) {
          charMesh.position.x = nextX;
          charMesh.position.z = nextZ;
        } else if (canMoveTo(nextX, charMesh.position.z)) {
          charMesh.position.x = nextX; // Slide X
        } else if (canMoveTo(charMesh.position.x, nextZ)) {
          charMesh.position.z = nextZ; // Slide Z
        }

        charMesh.rotation.y = Math.atan2(moveVec.x, moveVec.z);
        targetPosRef.current.copy(charMesh.position);
        isMovingRef.current = false;
        if (!isExternalFbxLoaded) operative.update(elapsed, 'walk', 1);
      } else if (isAutoMoving) {
        const distToTarget = charMesh.position.distanceTo(targetPos);
        if (distToTarget > 0.4) {
          const dir = new THREE.Vector3().subVectors(targetPos, charMesh.position).normalize();
          const step = Math.min(distToTarget, delta * currentSpeed);
          const nextPos = charMesh.position.clone().add(dir.clone().multiplyScalar(step));
          if (canMoveTo(nextPos.x, nextPos.z)) {
            charMesh.position.copy(nextPos);
          } else {
            // Blocked by barrier
            isMovingRef.current = false;
          }
          const targetRotY = Math.atan2(dir.x, dir.z);
          charMesh.rotation.y = THREE.MathUtils.lerp(charMesh.rotation.y, targetRotY, 0.2);
          if (!isExternalFbxLoaded) operative.update(elapsed, 'walk', 1);
        } else {
          isMovingRef.current = false;
          targetPosRef.current.copy(charMesh.position);
          if (!isExternalFbxLoaded) operative.update(elapsed, activeStageId ? 'hack' : 'idle', 0);
        }
      }

      // Proximity Detection to Stations (Walk-to-Open Trigger)
      let nearestStage = null;
      let nearestDistance = Infinity;
      pedestals.forEach((p) => {
        const d = charMesh.position.distanceTo(p.group.position);
        if (d < nearestDistance) {
          nearestDistance = d;
          nearestStage = p;
        }
      });

      if (nearestStage && nearestDistance < 3.0) {
        setProximityPrompt({
          stageId: nearestStage.stageId,
          stageTitle: nearestStage.group.userData.stageTitle
        });

        // Auto-open when walking directly onto the center ring (< 2.3)
        if (nearestDistance < 2.3 && lastCooldownStageRef.current !== nearestStage.stageId) {
          lastCooldownStageRef.current = nearestStage.stageId;
          sound.playMilestoneUnlock();
          onSelectStage(nearestStage.stageId);
        }
      } else {
        setProximityPrompt(null);
        if (nearestDistance > 4.5) {
          lastCooldownStageRef.current = null;
        }
      }

      // Update follow light
      charSpot.position.set(charMesh.position.x, 8, charMesh.position.z + 2);

      // Camera follow behavior
      if (cameraMode === 'follow') {
        controls.target.lerp(
          new THREE.Vector3(charMesh.position.x, charMesh.position.y + 1.8, charMesh.position.z),
          0.1
        );
      }

      // Animate Trees Swaying in the Wind
      animatedTrees.forEach(t => {
        t.foliage.rotation.z = Math.sin(elapsed * t.swaySpeed + t.phase) * 0.035;
        t.foliage.rotation.x = Math.cos(elapsed * t.swaySpeed * 0.8 + t.phase) * 0.025;
      });

      // Animate Floating Fireflies / Spores
      fireflies.forEach(ff => {
        ff.position.y = ff.userData.baseY + Math.sin(elapsed * ff.userData.speed + ff.userData.offset) * 0.5;
        ff.position.x += Math.sin(elapsed * 0.5 + ff.userData.offset) * 0.012;
      });

      // Draw Real-time GTA Radar MiniMap
      if (radarCanvasRef.current) {
        const rCanvas = radarCanvasRef.current;
        const rCtx = rCanvas.getContext('2d');
        if (rCtx) {
          radarSweepAngleRef.current = (radarSweepAngleRef.current + 0.035) % (Math.PI * 2);
          drawGtaRadar(
            rCtx,
            rCanvas.width,
            rCanvas.height,
            charMesh.position.x,
            charMesh.position.z,
            charMesh.rotation.y,
            activeStageId,
            radarZoomRef.current,
            radarSweepAngleRef.current
          );
        }
      }

      // Update Player Coords for HUD (throttled)
      if (Math.floor(elapsed * 10) % 3 === 0) {
        setPlayerCoords({
          x: Math.round(charMesh.position.x * 10) / 10,
          z: Math.round(charMesh.position.z * 10) / 10
        });
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // 13. Dynamic Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      renderer.domElement.removeEventListener('mousemove', handlePointerMove);
      renderer.domElement.removeEventListener('click', handleClick);
      controls.dispose();
      renderer.dispose();
    };
  }, [characterGender, characterColor, characterName]);

  // Navigate operative when activeStageId changes
  const moveToStage = (stageId) => {
    const stage = STAGES_DATA.find(s => s.id === stageId);
    if (stage && operativeRef.current) {
      targetPosRef.current.set(stage.position.x, 0, stage.position.z + 2.5);
      isMovingRef.current = true;
      setCurrentLocationName(stage.titleAr);
      sound.playWarp();
    }
  };

  useEffect(() => {
    if (activeStageId) {
      moveToStage(activeStageId);
    }
  }, [activeStageId]);

  const resetCamera = () => {
    if (operativeRef.current && controlsRef.current && cameraRef.current) {
      const charPos = operativeRef.current.mesh.position;
      controlsRef.current.target.set(charPos.x, charPos.y + 1.8, charPos.z);
      cameraRef.current.position.set(charPos.x, charPos.y + 5, charPos.z + 10);
      sound.playBlip(900, 0.05);
    }
  };

  // GTA MiniMap Click to Navigate Handler
  const handleRadarClick = (e) => {
    const canvas = radarCanvasRef.current;
    if (!canvas || !operativeRef.current) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radarRadius = Math.min(centerX, centerY) - 8;
    const scale = radarRadius / radarZoomRef.current;

    const charPos = operativeRef.current.mesh.position;
    const worldClickX = charPos.x + (clickX - centerX) / scale;
    const worldClickZ = charPos.z + (clickY - centerY) / scale;

    // Check if clicked near any station
    let clickedStage = null;
    let minDist = 8.5;
    STAGES_DATA.forEach(st => {
      const d = Math.hypot(st.position.x - worldClickX, st.position.z - worldClickZ);
      if (d < minDist) {
        minDist = d;
        clickedStage = st;
      }
    });

    if (clickedStage) {
      sound.playMilestoneUnlock();
      moveToStage(clickedStage.id);
    } else {
      sound.playSelect();
      targetPosRef.current.set(worldClickX, 0, worldClickZ);
      isMovingRef.current = true;
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#060913]">
      {/* Fullscreen 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Tactical Location HUD */}
      <div className="absolute top-20 left-6 z-20 flex items-center gap-3 bg-slate-950/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-cyan-500/40 text-xs shadow-2xl">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-slate-400">الموقع الحالي:</span>
          <span className="font-bold text-cyan-300 font-mono text-sm">{currentLocationName}</span>
        </div>
      </div>

      {/* Camera Controls & Reset Focus */}
      <div className="absolute top-20 right-6 z-20 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md p-2 rounded-2xl border border-cyan-500/40 shadow-2xl">
        <button
          onClick={resetCamera}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 text-black hover:bg-cyan-400 rounded-xl text-xs font-bold transition-all shadow-lg shadow-cyan-500/30"
          title="إعادة تركيز الكاميرا على الشخصية"
        >
          <Crosshair className="w-4 h-4" />
          <span>تركيز الكاميرا</span>
        </button>
        <button
          onClick={() => {
            sound.playBlip(800, 0.05);
            setCameraMode(prev => prev === 'follow' ? 'free' : 'follow');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            cameraMode === 'follow'
              ? 'bg-slate-800 border-cyan-500/50 text-cyan-300'
              : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>{cameraMode === 'follow' ? 'تتبع تلقائي' : 'كاميرا حرة 360°'}</span>
        </button>
      </div>

      {/* Proximity Arrival Interactive Prompt Banner */}
      {proximityPrompt && (
        <div className="absolute top-36 left-1/2 -translate-x-1/2 z-30 bg-slate-950/95 backdrop-blur-xl border border-cyan-400 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center font-mono font-bold text-sm">
            E
          </div>
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase font-bold">
              ⚡ اقتربت من المحطة #{proximityPrompt.stageId}
            </div>
            <div className="text-sm font-bold text-white">
              اضغط <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-cyan-300 font-mono">E</kbd> أو انقر للدخول إلى: {proximityPrompt.stageTitle}
            </div>
          </div>
        </div>
      )}

      {/* Hovered Stage Tooltip */}
      {hoveredStage && !proximityPrompt && (
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 pointer-events-none bg-slate-950/95 backdrop-blur-xl border border-cyan-400 px-6 py-3.5 rounded-2xl shadow-2xl text-center animate-fade-in">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-cyber mb-1">
            ⚡ اضغط للتحرك واستكشاف المحطة
          </div>
          <div className="text-base font-bold text-white">{hoveredStage.stageTitle}</div>
          <div className="text-xs text-slate-400 font-mono mt-0.5">{hoveredStage.stageEn}</div>
        </div>
      )}

      {/* GTA-Style Tactical MiniMap Radar */}
      {!isRadarHidden && (
        <div className="absolute bottom-24 left-6 z-30 flex flex-col items-start gap-1.5 animate-fade-in pointer-events-auto select-none">
          {/* Top Status Bar: Radar Header & Coordinates */}
          <div className="flex items-center justify-between gap-3 px-3 py-1.5 bg-slate-950/90 rounded-xl border border-cyan-500/40 text-[11px] font-mono shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>RADAR GTA 3D</span>
            </div>
            <div className="text-slate-400 font-mono text-[10px]">
              X: {playerCoords.x.toFixed(1)} | Z: {playerCoords.z.toFixed(1)}
            </div>
          </div>

          {/* Radar Canvas with Circular Neon Bezel */}
          <div className="relative group cursor-crosshair">
            <canvas
              ref={radarCanvasRef}
              width={isRadarExpanded ? 260 : 190}
              height={isRadarExpanded ? 260 : 190}
              onClick={handleRadarClick}
              className={`rounded-full shadow-2xl shadow-cyan-500/25 border-2 border-cyan-400/70 bg-slate-950/95 transition-all ${
                isRadarExpanded ? 'w-[260px] h-[260px]' : 'w-[190px] h-[190px]'
              }`}
              title="رادار الخريطة المصغرة (GTA Radar) — انقر على أي محطة للانتقال المباشر إليها"
            />

            {/* Quick Zoom & Expand Floating Controls */}
            <div className="absolute bottom-2 right-2 flex flex-col gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playBlip(1100, 0.04);
                  setRadarZoom(prev => Math.max(30, prev - 15));
                }}
                className="w-6 h-6 rounded-lg bg-slate-900/90 border border-cyan-500/50 text-cyan-300 flex items-center justify-center text-xs font-bold hover:bg-cyan-500 hover:text-black transition-colors shadow-lg"
                title="تقريب الرادار (+)"
              >
                +
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playBlip(900, 0.04);
                  setRadarZoom(prev => Math.min(90, prev + 15));
                }}
                className="w-6 h-6 rounded-lg bg-slate-900/90 border border-cyan-500/50 text-cyan-300 flex items-center justify-center text-xs font-bold hover:bg-cyan-500 hover:text-black transition-colors shadow-lg"
                title="إبعاد الرادار (-)"
              >
                -
              </button>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                sound.playSelect();
                setIsRadarExpanded(prev => !prev);
              }}
              className="absolute top-2 right-2 w-6 h-6 rounded-lg bg-slate-900/90 border border-cyan-500/50 text-cyan-300 flex items-center justify-center text-[10px] hover:bg-cyan-500 hover:text-black transition-colors shadow-lg"
              title={isRadarExpanded ? 'تصغير الرادار' : 'تكبير الرادار'}
            >
              {isRadarExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Quick Click Hint */}
          <div className="text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2.5 py-0.5 rounded-md border border-slate-800 backdrop-blur-sm">
            انقر على أي محطة بالرادار للانتقال إليها
          </div>
        </div>
      )}

      {/* Movement Instructions Hint */}
      <div className="absolute bottom-24 right-6 z-20 hidden md:flex items-center gap-3 bg-slate-950/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-800 text-xs text-slate-300 shadow-2xl">
        <span className="flex items-center gap-1 font-mono text-cyan-400 font-bold">
          <kbd className="px-2 py-0.5 bg-slate-800 rounded border border-slate-600">W</kbd>
          <kbd className="px-2 py-0.5 bg-slate-800 rounded border border-slate-600">A</kbd>
          <kbd className="px-2 py-0.5 bg-slate-800 rounded border border-slate-600">S</kbd>
          <kbd className="px-2 py-0.5 bg-slate-800 rounded border border-slate-600">D</kbd>
        </span>
        <span>للحركة المباشرة بدون رجوع تلقائي</span>
        <span className="text-slate-600">|</span>
        <span>اضغط <kbd className="px-1.5 py-0.5 bg-slate-800 text-cyan-300 rounded font-mono">E</kbd> عند أي محطة لفتحها فوراً</span>
      </div>
    </div>
  );
}
