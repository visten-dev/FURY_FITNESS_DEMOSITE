import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RotateCw, Sparkles, Move3d } from 'lucide-react';

interface ThreeHeroDumbbellProps {
  className?: string;
  onSceneReady?: () => void;
}

export const ThreeHeroDumbbell: React.FC<ThreeHeroDumbbellProps> = ({ className = '', onSceneReady }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGlError, setHasWebGlError] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const probeCanvas = document.createElement('canvas');
        const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : (gl as WebGLRenderingContext).RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 550;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGlError(true);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 0.8, 4.3);
    camera.lookAt(0, 0, 0);

    // Studio Environment Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-Point Dramatic Lighting Rig
    // Key Light: Warm golden radiance from top-front
    const keyLight = new THREE.DirectionalLight(0xfff5e6, 3.2);
    keyLight.position.set(4, 5, 3.5);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0004;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    // Fill Light: Cool atmospheric ambient (reflects eagle blue from brand logo)
    const fillLight = new THREE.HemisphereLight(0x38bdf8, 0x121212, 1.4);
    scene.add(fillLight);

    // Rim/Backlight: Striking Fury Gold edge highlight
    const rimLight = new THREE.DirectionalLight(0xe5b842, 4.0);
    rimLight.position.set(-4.5, -0.5, -3.5);
    scene.add(rimLight);

    // Subtle front specular accent
    const frontGlow = new THREE.PointLight(0xe5b842, 1.8, 6);
    frontGlow.position.set(0, 2, 2.5);
    scene.add(frontGlow);

    // PROCEDURAL TEXTURES (100% in-memory, Zero external 404s)
    // 1. Cross-hatch diamond knurling bump map
    const knurlCanvas = document.createElement('canvas');
    knurlCanvas.width = 256;
    knurlCanvas.height = 256;
    const kctx = knurlCanvas.getContext('2d')!;
    kctx.fillStyle = '#808080';
    kctx.fillRect(0, 0, 256, 256);
    kctx.strokeStyle = '#222222';
    kctx.lineWidth = 2.5;
    for (let i = -256; i < 512; i += 14) {
      kctx.beginPath();
      kctx.moveTo(i, 0);
      kctx.lineTo(i + 256, 256);
      kctx.stroke();

      kctx.beginPath();
      kctx.moveTo(i, 256);
      kctx.lineTo(i + 256, 0);
      kctx.stroke();
    }
    const knurlTexture = new THREE.CanvasTexture(knurlCanvas);
    knurlTexture.wrapS = THREE.RepeatWrapping;
    knurlTexture.wrapT = THREE.RepeatWrapping;
    knurlTexture.repeat.set(8, 2);

    // 2. High-res Olympic plate face texture with "FURY FITNESS" and "25 KG"
    const plateCanvas = document.createElement('canvas');
    plateCanvas.width = 512;
    plateCanvas.height = 512;
    const pctx = plateCanvas.getContext('2d')!;
    pctx.fillStyle = '#141414';
    pctx.fillRect(0, 0, 512, 512);

    // Beveled rings
    pctx.strokeStyle = '#242424';
    pctx.lineWidth = 5;
    pctx.beginPath();
    pctx.arc(256, 256, 218, 0, Math.PI * 2);
    pctx.stroke();

    pctx.strokeStyle = '#1d1d1d';
    pctx.lineWidth = 4;
    pctx.beginPath();
    pctx.arc(256, 256, 168, 0, Math.PI * 2);
    pctx.stroke();

    pctx.beginPath();
    pctx.arc(256, 256, 78, 0, Math.PI * 2);
    pctx.stroke();

    // Brand lettering in gold
    pctx.fillStyle = '#E5B842';
    pctx.font = 'bold 38px "Oswald", sans-serif';
    pctx.textAlign = 'center';
    pctx.textBaseline = 'middle';
    pctx.fillText('FURY FITNESS', 256, 82);

    pctx.fillStyle = '#F5F5F5';
    pctx.font = 'bold 34px "Oswald", sans-serif';
    pctx.fillText('25 KG', 256, 428);

    pctx.fillStyle = '#777777';
    pctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
    pctx.fillText('CALIBRATED OLYMPIC RIG', 256, 256);

    const plateTexture = new THREE.CanvasTexture(plateCanvas);
    plateTexture.colorSpace = THREE.SRGBColorSpace;

    // MATERIALS
    const steelKnurlMaterial = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      metalness: 0.94,
      roughness: 0.32,
      bumpMap: knurlTexture,
      bumpScale: 0.045,
    });

    const chromeBarMaterial = new THREE.MeshStandardMaterial({
      color: 0xd6d6d6,
      metalness: 0.98,
      roughness: 0.12,
    });

    const castIronPlateMaterial = new THREE.MeshStandardMaterial({
      color: 0x181818,
      metalness: 0.55,
      roughness: 0.65,
      map: plateTexture,
    });

    const goldRimMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5b842,
      metalness: 0.96,
      roughness: 0.22,
    });

    const chromeLockMaterial = new THREE.MeshStandardMaterial({
      color: 0xeaeaea,
      metalness: 0.98,
      roughness: 0.08,
    });

    // COMPOSITE 3D DUMBBELL / BARBELL GROUP (12 distinct parts)
    const equipmentGroup = new THREE.Group();

    // 1. Central Knurled Bar
    const barGeo = new THREE.CylinderGeometry(0.048, 0.048, 2.7, 32);
    const barMesh = new THREE.Mesh(barGeo, steelKnurlMaterial);
    barMesh.rotation.z = Math.PI / 2;
    barMesh.castShadow = !isSoftwareGl;
    equipmentGroup.add(barMesh);

    // 2 & 3. Inner Sleeves
    [-0.58, 0.58].forEach((xPos) => {
      const sleeveGeo = new THREE.CylinderGeometry(0.078, 0.078, 0.09, 32);
      const sleeveMesh = new THREE.Mesh(sleeveGeo, chromeBarMaterial);
      sleeveMesh.rotation.z = Math.PI / 2;
      sleeveMesh.position.x = xPos;
      equipmentGroup.add(sleeveMesh);
    });

    // 4 & 5. Primary Heavy 25KG Olympic Plates
    [-0.75, 0.75].forEach((xPos, idx) => {
      const plateGeo = new THREE.CylinderGeometry(0.74, 0.74, 0.12, 48);
      const plateMesh = new THREE.Mesh(plateGeo, castIronPlateMaterial);
      plateMesh.rotation.z = Math.PI / 2;
      if (idx === 0) plateMesh.rotation.y = Math.PI;
      plateMesh.position.x = xPos;
      plateMesh.castShadow = !isSoftwareGl;
      plateMesh.receiveShadow = !isSoftwareGl;
      equipmentGroup.add(plateMesh);

      // Gold anodized perimeter rim
      const rimGeo = new THREE.TorusGeometry(0.74, 0.018, 16, 64);
      const rimMesh = new THREE.Mesh(rimGeo, goldRimMaterial);
      rimMesh.rotation.y = Math.PI / 2;
      rimMesh.position.x = xPos;
      equipmentGroup.add(rimMesh);
    });

    // 6 & 7. Secondary 10KG Outer Plates
    [-0.90, 0.90].forEach((xPos, idx) => {
      const subPlateGeo = new THREE.CylinderGeometry(0.58, 0.58, 0.09, 48);
      const subPlateMesh = new THREE.Mesh(subPlateGeo, castIronPlateMaterial);
      subPlateMesh.rotation.z = Math.PI / 2;
      if (idx === 0) subPlateMesh.rotation.y = Math.PI;
      subPlateMesh.position.x = xPos;
      subPlateMesh.castShadow = !isSoftwareGl;
      equipmentGroup.add(subPlateMesh);

      const subRimGeo = new THREE.TorusGeometry(0.58, 0.015, 16, 64);
      const subRimMesh = new THREE.Mesh(subRimGeo, goldRimMaterial);
      subRimMesh.rotation.y = Math.PI / 2;
      subRimMesh.position.x = xPos;
      equipmentGroup.add(subRimMesh);
    });

    // 8 & 9. Olympic Spin-Lock Collars & Levers
    [-1.01, 1.01].forEach((xPos) => {
      const collarGeo = new THREE.CylinderGeometry(0.088, 0.088, 0.07, 32);
      const collarMesh = new THREE.Mesh(collarGeo, chromeLockMaterial);
      collarMesh.rotation.z = Math.PI / 2;
      collarMesh.position.x = xPos;
      equipmentGroup.add(collarMesh);

      const leverGeo = new THREE.BoxGeometry(0.03, 0.15, 0.04);
      const leverMesh = new THREE.Mesh(leverGeo, goldRimMaterial);
      leverMesh.position.set(xPos, 0.11, 0);
      equipmentGroup.add(leverMesh);
    });

    // 10. Contact Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sctx = shadowCanvas.getContext('2d')!;
    const gradient = sctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.88)');
    gradient.addColorStop(0.4, 'rgba(0, 0, 0, 0.45)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sctx.fillStyle = gradient;
    sctx.fillRect(0, 0, 256, 256);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3.8, 2.4),
      new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        depthWrite: false,
        opacity: 0.65,
      })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.92;
    scene.add(shadowPlane);

    // 11. Atmospheric Golden Fitness Particles / Dust
    const particleCount = 50;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 5.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
      speeds[i] = 0.003 + Math.random() * 0.005;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xe5b842,
      size: 0.024,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Dynamic initial tilt
    equipmentGroup.position.set(0, 0.08, 0);
    equipmentGroup.rotation.set(0.38, -0.45, 0.18);
    scene.add(equipmentGroup);

    // Mouse / Cursor Tracking
    const targetRotation = { x: 0.38, y: -0.45 };
    const mouse = { x: 0, y: 0 };
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = x;
      mouse.y = y;

      if (isDragging) {
        const deltaX = e.clientX - prevMouse.x;
        const deltaY = e.clientY - prevMouse.y;
        targetRotation.y += deltaX * 0.01;
        targetRotation.x += deltaY * 0.01;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 550;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with Exponential Damping
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Continuous slow rotation if active
      if (isRotating && !isDragging) {
        targetRotation.y += delta * 0.42;
      }

      // Parallax offset from mouse
      const parallaxX = mouse.x * 0.35;
      const parallaxY = mouse.y * 0.22;

      // Damped smooth motion
      equipmentGroup.rotation.y = THREE.MathUtils.damp(
        equipmentGroup.rotation.y,
        targetRotation.y + parallaxX,
        3.8,
        delta
      );
      equipmentGroup.rotation.x = THREE.MathUtils.damp(
        equipmentGroup.rotation.x,
        targetRotation.x - parallaxY,
        3.8,
        delta
      );

      // Subtle levitation breath
      equipmentGroup.position.y = 0.08 + Math.sin(now * 0.0016) * 0.035;

      // Drift particles
      const posAttr = particleGeo.attributes.position;
      const posArr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += speeds[i] * 0.35;
        if (posArr[i * 3 + 1] > 2.2) {
          posArr[i * 3 + 1] = -1.8;
        }
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    if (onSceneReady) onSceneReady();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);

      barGeo.dispose();
      particleGeo.dispose();
      steelKnurlMaterial.dispose();
      chromeBarMaterial.dispose();
      castIronPlateMaterial.dispose();
      goldRimMaterial.dispose();
      chromeLockMaterial.dispose();
      knurlTexture.dispose();
      plateTexture.dispose();
      shadowTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isRotating]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing touch-none z-10"
        title="Interactive 3D Barbell: Drag to inspect 360°"
      />

      {/* Graceful Fallback if WebGL unavailable */}
      {hasWebGlError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d0d] p-6 text-center z-10">
          <img
            src="./images/strength_training.webp"
            alt="Fury Fitness Equipment"
            className="w-72 h-72 object-cover rounded-xl border border-[#E5B842]/30 shadow-2xl mb-4"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('traing_7fd3f9e1')) {
                target.src = './images/traing_7fd3f9e1.webp';
              }
            }}
          />
          <span className="text-[#E5B842] font-display text-lg tracking-wider uppercase">
            Fury Fitness · Precision Equipment
          </span>
        </div>
      )}

      {/* Minimal Control Pill: Pinned cleanly at bottom, non-obstructive */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101010]/90 border border-white/10 text-xs text-neutral-300 shadow-xl backdrop-blur-md pointer-events-auto">
        <span className="text-[#E5B842] font-display uppercase tracking-wider text-[11px] font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#E5B842]" /> 3D RIG
        </span>
        <span className="text-neutral-700">·</span>
        <button
          type="button"
          onClick={() => setIsRotating((prev) => !prev)}
          className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors ${
            isRotating ? 'bg-[#E5B842]/20 text-[#E5B842]' : 'bg-neutral-800 text-neutral-400 hover:text-white'
          }`}
          title="Toggle rotation"
        >
          <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{isRotating ? 'Auto' : 'Paused'}</span>
        </button>
        <span className="hidden sm:inline text-neutral-500 text-[10px]">
          · Drag 360°
        </span>
      </div>

      {/* Subtle radial scrim */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#080808]/10 to-[#080808]/90" />
    </div>
  );
};
