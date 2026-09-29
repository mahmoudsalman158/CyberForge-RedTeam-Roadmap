import * as THREE from 'three';

// Procedural 3D Realistic Cyber Operatives (Female & Male) with Articulated Rigging
export function createCyberOperative({
  gender = 'female',
  colorTheme = '#00f3ff',
  operatorName = 'رقية وسام'
} = {}) {
  const group = new THREE.Group();
  group.name = `CyberOperative_${gender}`;
  const isMale = gender === 'male';

  // Heroic Realistic Proportions Scale
  group.scale.set(1.4, 1.4, 1.4);

  const neonColor = new THREE.Color(colorTheme);

  // High-detail PBR Materials
  const suitColor = isMale ? 0x0f172a : 0x111827;
  const darkSuitMat = new THREE.MeshStandardMaterial({
    color: suitColor,
    roughness: 0.35,
    metalness: 0.75
  });
  const armorMat = new THREE.MeshStandardMaterial({
    color: isMale ? 0x1e293b : 0x1e2230,
    roughness: 0.25,
    metalness: 0.85
  });
  const skinTone = isMale ? 0xeac09e : 0xf6d8ae;
  const skinMat = new THREE.MeshStandardMaterial({
    color: skinTone,
    roughness: 0.55,
    metalness: 0.05
  });
  const hairColor = isMale ? 0x1c1917 : 0x18181b;
  const hairMat = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 0.45,
    metalness: 0.2
  });
  const glowMat = new THREE.MeshStandardMaterial({
    color: neonColor,
    emissive: neonColor,
    emissiveIntensity: 2.0,
    roughness: 0.1,
    metalness: 0.5
  });
  const visorMat = new THREE.MeshPhysicalMaterial({
    color: neonColor,
    emissive: neonColor,
    emissiveIntensity: 2.4,
    transparent: true,
    opacity: 0.92,
    roughness: 0.1,
    metalness: 0.9,
    transmission: 0.2
  });

  // Body Root Pivot
  const bodyRoot = new THREE.Group();
  group.add(bodyRoot);

  // ================= 1. HIPS & PELVIS =================
  const pelvisWidth = isMale ? 0.34 : 0.30;
  const pelvisGeom = new THREE.CylinderGeometry(pelvisWidth, pelvisWidth * 0.9, 0.36, 16);
  const pelvis = new THREE.Mesh(pelvisGeom, darkSuitMat);
  pelvis.position.y = 1.35;
  bodyRoot.add(pelvis);

  // Heavy Tactical Belt & Utility Pouches
  const beltGeom = new THREE.CylinderGeometry(pelvisWidth + 0.04, pelvisWidth + 0.04, 0.1, 16);
  const belt = new THREE.Mesh(beltGeom, glowMat);
  belt.position.y = 1.5;
  bodyRoot.add(belt);

  // Side Holster / Pouches
  const pouchGeom = new THREE.BoxGeometry(0.12, 0.16, 0.08);
  const leftPouch = new THREE.Mesh(pouchGeom, armorMat);
  leftPouch.position.set(pelvisWidth + 0.03, 1.42, 0);
  bodyRoot.add(leftPouch);

  // ================= 2. TORSO & CHEST RIG =================
  const torsoGroup = new THREE.Group();
  torsoGroup.position.y = 1.65;
  bodyRoot.add(torsoGroup);

  const chestTopWidth = isMale ? 0.44 : 0.34;
  const chestBottomWidth = isMale ? 0.32 : 0.25;
  const chestGeom = new THREE.CylinderGeometry(chestTopWidth, chestBottomWidth, 0.58, 16);
  const chest = new THREE.Mesh(chestGeom, armorMat);
  torsoGroup.add(chest);

  // Tactical Core Arc Reactor
  const reactorGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.06, 16);
  reactorGeom.rotateX(Math.PI / 2);
  const reactor = new THREE.Mesh(reactorGeom, glowMat);
  reactor.position.set(0, 0.08, (chestTopWidth + chestBottomWidth) / 2 * 0.75);
  torsoGroup.add(reactor);

  // Reinforced Armor Plating (Male gets tactical vest plates, Female gets ergonomic plates)
  if (isMale) {
    const vestPlateGeom = new THREE.BoxGeometry(0.36, 0.32, 0.08);
    const vestPlate = new THREE.Mesh(vestPlateGeom, darkSuitMat);
    vestPlate.position.set(0, 0.05, 0.22);
    torsoGroup.add(vestPlate);
  } else {
    const plateLeftGeom = new THREE.SphereGeometry(0.14, 12, 12);
    plateLeftGeom.scale(1.1, 1, 0.6);
    const plateLeft = new THREE.Mesh(plateLeftGeom, darkSuitMat);
    plateLeft.position.set(0.12, 0.08, 0.18);
    torsoGroup.add(plateLeft);

    const plateRight = new THREE.Mesh(plateLeftGeom, darkSuitMat);
    plateRight.position.set(-0.12, 0.08, 0.18);
    torsoGroup.add(plateRight);
  }

  // Neck
  const neckGeom = new THREE.CylinderGeometry(0.12, 0.14, 0.18, 12);
  const neck = new THREE.Mesh(neckGeom, skinMat);
  neck.position.y = 0.36;
  torsoGroup.add(neck);

  // ================= 3. HEAD, HAIR & CYBER VISOR =================
  const headGroup = new THREE.Group();
  headGroup.position.y = 0.58;
  torsoGroup.add(headGroup);

  const headGeom = new THREE.SphereGeometry(0.24, 20, 20);
  headGeom.scale(0.9, 1.1, 0.95);
  const head = new THREE.Mesh(headGeom, skinMat);
  headGroup.add(head);

  if (isMale) {
    // Military Fade / Undercut Hair
    const hairGeom = new THREE.CylinderGeometry(0.25, 0.26, 0.16, 16);
    const hair = new THREE.Mesh(hairGeom, hairMat);
    hair.position.set(0, 0.14, -0.02);
    headGroup.add(hair);

    const hairTopGeom = new THREE.SphereGeometry(0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const hairTop = new THREE.Mesh(hairTopGeom, hairMat);
    hairTop.position.set(0, 0.18, -0.02);
    headGroup.add(hairTop);

    // Tactical Dual-Lens Cyber Visor
    const visorGeom = new THREE.BoxGeometry(0.42, 0.12, 0.22);
    const visor = new THREE.Mesh(visorGeom, visorMat);
    visor.position.set(0, 0.03, 0.15);
    headGroup.add(visor);
  } else {
    // Cyberpunk Bob-cut Hair with front locks
    const hairGeom = new THREE.SphereGeometry(0.28, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.68);
    const hair = new THREE.Mesh(hairGeom, hairMat);
    hair.position.set(0, 0.06, -0.02);
    headGroup.add(hair);

    const strandGeom = new THREE.CylinderGeometry(0.04, 0.015, 0.4, 8);
    const leftStrand = new THREE.Mesh(strandGeom, hairMat);
    leftStrand.position.set(0.22, -0.06, 0.12);
    leftStrand.rotation.z = -0.18;
    headGroup.add(leftStrand);

    const rightStrand = new THREE.Mesh(strandGeom, hairMat);
    rightStrand.position.set(-0.22, -0.06, 0.12);
    rightStrand.rotation.z = 0.18;
    headGroup.add(rightStrand);

    // Sleek Panoramic Visor
    const visorGeom = new THREE.BoxGeometry(0.38, 0.11, 0.2);
    const visor = new THREE.Mesh(visorGeom, visorMat);
    visor.position.set(0, 0.03, 0.16);
    headGroup.add(visor);
  }

  // Antenna Comms Unit on Ear
  const antennaGeom = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8);
  const leftAnt = new THREE.Mesh(antennaGeom, armorMat);
  leftAnt.position.set(0.23, 0.06, 0.05);
  leftAnt.rotation.x = -0.3;
  headGroup.add(leftAnt);

  // ================= 4. ARMS & GAUNTLET =================
  const shoulderDist = isMale ? 0.48 : 0.40;

  // Left Arm Group
  const leftArmGroup = new THREE.Group();
  leftArmGroup.position.set(shoulderDist, 0.2, 0);
  torsoGroup.add(leftArmGroup);

  const shoulderPadGeom = new THREE.SphereGeometry(isMale ? 0.15 : 0.12, 12, 12);
  const leftShoulder = new THREE.Mesh(shoulderPadGeom, armorMat);
  leftArmGroup.add(leftShoulder);

  const upperArmGeom = new THREE.CylinderGeometry(0.09, 0.08, 0.42, 12);
  upperArmGeom.translate(0, -0.21, 0);
  const leftUpperArm = new THREE.Mesh(upperArmGeom, darkSuitMat);
  leftArmGroup.add(leftUpperArm);

  const leftForearmGroup = new THREE.Group();
  leftForearmGroup.position.y = -0.42;
  leftArmGroup.add(leftForearmGroup);

  const forearmGeom = new THREE.CylinderGeometry(0.08, 0.07, 0.38, 12);
  forearmGeom.translate(0, -0.19, 0);
  const leftForearm = new THREE.Mesh(forearmGeom, armorMat);
  leftForearmGroup.add(leftForearm);

  // Holographic Data Gauntlet on Left Wrist
  const gauntletGeom = new THREE.BoxGeometry(0.14, 0.05, 0.18);
  const holoGauntlet = new THREE.Mesh(gauntletGeom, glowMat);
  holoGauntlet.position.set(0, -0.24, 0.07);
  leftForearmGroup.add(holoGauntlet);

  // Right Arm Group
  const rightArmGroup = new THREE.Group();
  rightArmGroup.position.set(-shoulderDist, 0.2, 0);
  torsoGroup.add(rightArmGroup);

  const rightShoulder = new THREE.Mesh(shoulderPadGeom, armorMat);
  rightArmGroup.add(rightShoulder);

  const rightUpperArm = new THREE.Mesh(upperArmGeom, darkSuitMat);
  rightArmGroup.add(rightUpperArm);

  const rightForearmGroup = new THREE.Group();
  rightForearmGroup.position.y = -0.42;
  rightArmGroup.add(rightForearmGroup);

  const rightForearm = new THREE.Mesh(forearmGeom, armorMat);
  rightForearmGroup.add(rightForearm);

  // ================= 5. LEGS & COMBAT BOOTS =================
  const legOffset = isMale ? 0.20 : 0.17;

  // Left Leg
  const leftLegGroup = new THREE.Group();
  leftLegGroup.position.set(legOffset, 1.25, 0);
  bodyRoot.add(leftLegGroup);

  const thighGeom = new THREE.CylinderGeometry(0.12, 0.10, 0.58, 12);
  thighGeom.translate(0, -0.29, 0);
  const leftThigh = new THREE.Mesh(thighGeom, darkSuitMat);
  leftLegGroup.add(leftThigh);

  const leftCalfGroup = new THREE.Group();
  leftCalfGroup.position.y = -0.58;
  leftLegGroup.add(leftCalfGroup);

  const calfGeom = new THREE.CylinderGeometry(0.10, 0.09, 0.56, 12);
  calfGeom.translate(0, -0.28, 0);
  const leftCalf = new THREE.Mesh(calfGeom, armorMat);
  leftCalfGroup.add(leftCalf);

  const bootGeom = new THREE.BoxGeometry(0.18, 0.16, 0.35);
  const leftBoot = new THREE.Mesh(bootGeom, darkSuitMat);
  leftBoot.position.set(0, -0.62, 0.06);
  leftCalfGroup.add(leftBoot);

  const soleGeom = new THREE.BoxGeometry(0.18, 0.04, 0.35);
  const leftSole = new THREE.Mesh(soleGeom, glowMat);
  leftSole.position.set(0, -0.70, 0.06);
  leftCalfGroup.add(leftSole);

  // Right Leg
  const rightLegGroup = new THREE.Group();
  rightLegGroup.position.set(-legOffset, 1.25, 0);
  bodyRoot.add(rightLegGroup);

  const rightThigh = new THREE.Mesh(thighGeom, darkSuitMat);
  rightLegGroup.add(rightThigh);

  const rightCalfGroup = new THREE.Group();
  rightCalfGroup.position.y = -0.58;
  rightLegGroup.add(rightCalfGroup);

  const rightCalf = new THREE.Mesh(calfGeom, armorMat);
  rightCalfGroup.add(rightCalf);

  const rightBoot = new THREE.Mesh(bootGeom, darkSuitMat);
  rightBoot.position.set(0, -0.62, 0.06);
  rightCalfGroup.add(rightBoot);

  const rightSole = new THREE.Mesh(soleGeom, glowMat);
  rightSole.position.set(0, -0.70, 0.06);
  rightCalfGroup.add(rightSole);

  // ================= 6. FLOATING CYBER COMPANION DRONE =================
  const droneGroup = new THREE.Group();
  droneGroup.position.set(0.75, 2.2, 0.25);
  bodyRoot.add(droneGroup);

  const droneCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.15, 1), armorMat);
  droneGroup.add(droneCore);

  const droneEye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), glowMat);
  droneEye.position.z = 0.09;
  droneGroup.add(droneEye);

  const droneRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.24, 0.02, 8, 24),
    glowMat
  );
  droneRing.rotation.x = Math.PI / 3;
  droneGroup.add(droneRing);

  // Under-feet Beacon Light
  const beaconLight = new THREE.PointLight(neonColor, 2.8, 7);
  beaconLight.position.set(0, 0.3, 0);
  group.add(beaconLight);

  const groundRingGeom = new THREE.RingGeometry(0.65, 0.78, 32);
  groundRingGeom.rotateX(-Math.PI / 2);
  const groundRing = new THREE.Mesh(groundRingGeom, glowMat);
  groundRing.position.y = 0.03;
  group.add(groundRing);

  // Floating Operating Screen (Visible when hacking)
  const holoScreenGeom = new THREE.PlaneGeometry(0.7, 0.45);
  const holoScreenMat = new THREE.MeshBasicMaterial({
    color: neonColor,
    transparent: true,
    opacity: 0.0,
    side: THREE.DoubleSide
  });
  const holoScreen = new THREE.Mesh(holoScreenGeom, holoScreenMat);
  holoScreen.position.set(0, 1.7, 0.65);
  bodyRoot.add(holoScreen);

  // ================= 7. DYNAMIC 3D FLOATING NAMETAG =================
  const nameSprite = createNametagSprite(operatorName, gender, colorTheme);
  nameSprite.position.set(0, 3.4, 0);
  group.add(nameSprite);

  return {
    mesh: group,
    drone: droneGroup,
    droneRing: droneRing,
    nameSprite: nameSprite,
    updateName(newName, newGender = gender, newColor = colorTheme) {
      group.remove(nameSprite);
      const updatedSprite = createNametagSprite(newName, newGender, newColor);
      updatedSprite.position.set(0, 3.4, 0);
      group.add(updatedSprite);
    },
    setGlowColor(newColorHex) {
      const c = new THREE.Color(newColorHex);
      glowMat.color.copy(c);
      glowMat.emissive.copy(c);
      visorMat.color.copy(c);
      visorMat.emissive.copy(c);
      holoScreenMat.color.copy(c);
      beaconLight.color.copy(c);
    },
    update(time, state = 'idle', walkSpeed = 0) {
      // Drone floating & rotation
      droneGroup.position.y = 2.2 + Math.sin(time * 3) * 0.15;
      droneRing.rotation.z += 0.04;
      droneRing.rotation.x = Math.PI / 4 + Math.sin(time * 2) * 0.25;
      groundRing.rotation.y = time * 0.6;

      if (state === 'walk') {
        holoScreenMat.opacity = 0.0;
        const cycle = time * 8;
        // Legs swing
        leftLegGroup.rotation.x = Math.sin(cycle) * 0.65;
        rightLegGroup.rotation.x = -Math.sin(cycle) * 0.65;
        leftCalfGroup.rotation.x = Math.max(0, Math.sin(cycle + 1.2) * 0.65);
        rightCalfGroup.rotation.x = Math.max(0, -Math.sin(cycle + 1.2) * 0.65);

        // Arms counter-swing
        leftArmGroup.rotation.x = -Math.sin(cycle) * 0.55;
        rightArmGroup.rotation.x = Math.sin(cycle) * 0.55;
        leftForearmGroup.rotation.x = -0.3;
        rightForearmGroup.rotation.x = -0.3;

        // Torso natural bobbing
        pelvis.position.y = 1.35 + Math.abs(Math.sin(cycle * 2)) * 0.06;
        torsoGroup.rotation.y = Math.sin(cycle) * 0.12;
      } else if (state === 'hack') {
        holoScreenMat.opacity = 0.75 + Math.sin(time * 10) * 0.2;
        leftArmGroup.rotation.x = -0.8 + Math.sin(time * 8) * 0.1;
        rightArmGroup.rotation.x = -0.8 + Math.cos(time * 8) * 0.1;
        leftForearmGroup.rotation.x = -0.6 + Math.sin(time * 12) * 0.15;
        rightForearmGroup.rotation.x = -0.6 + Math.cos(time * 12) * 0.15;

        leftLegGroup.rotation.x = 0;
        rightLegGroup.rotation.x = 0;
        leftCalfGroup.rotation.x = 0;
        rightCalfGroup.rotation.x = 0;
        pelvis.position.y = 1.35;
      } else {
        // Idle breathing
        holoScreenMat.opacity = 0.0;
        const breath = Math.sin(time * 2) * 0.035;
        torsoGroup.position.y = 1.65 + breath;
        torsoGroup.rotation.y = 0;
        headGroup.rotation.y = Math.sin(time * 0.8) * 0.15;

        leftArmGroup.rotation.x = 0.1;
        leftArmGroup.rotation.z = 0.15;
        rightArmGroup.rotation.x = 0.1;
        rightArmGroup.rotation.z = -0.15;
        leftForearmGroup.rotation.x = -0.2;
        rightForearmGroup.rotation.x = -0.2;

        leftLegGroup.rotation.x = 0;
        rightLegGroup.rotation.x = 0;
        leftCalfGroup.rotation.x = 0;
        rightCalfGroup.rotation.x = 0;
        pelvis.position.y = 1.35;
      }
    }
  };
}

// Helper to generate the 3D floating nametag sprite
function createNametagSprite(name, gender, colorTheme) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');

  // Background Glass Box
  ctx.fillStyle = 'rgba(7, 12, 24, 0.88)';
  ctx.strokeStyle = colorTheme;
  ctx.lineWidth = 4;
  ctx.roundRect(12, 12, 616, 136, 24);
  ctx.fill();
  ctx.stroke();

  // Glow line
  ctx.fillStyle = colorTheme;
  ctx.fillRect(40, 132, 560, 4);

  // Title & Role
  ctx.fillStyle = colorTheme;
  ctx.font = 'bold 44px "Cairo", sans-serif';
  ctx.textAlign = 'center';
  const prefix = gender === 'female' ? '👩‍💻' : '👨‍💻';
  ctx.fillText(`${prefix} ${name}`, 320, 72);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '22px "Orbitron", "Cairo", sans-serif';
  const roleText = gender === 'female' ? 'Red Team Analyst & Penetration Tester' : 'Red Team Operator & AI Core Architect';
  ctx.fillText(roleText, 320, 114);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(3.4, 0.85, 1);
  return sprite;
}
