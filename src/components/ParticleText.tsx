import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleTextProps {
  text: string;
  className?: string;
}

export function ParticleText({ text, className = "" }: ParticleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particleSystem: THREE.Points;
    let animationId: number;

    // Initialize Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create particles without font loading for now
    particleSystem = createSimpleTextParticles(text, scene);

    // Animation loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (particleSystem) {
        particleSystem.rotation.y += 0.002;
        
        // Mouse interaction effect
        const positions = particleSystem.geometry.attributes.position as THREE.BufferAttribute;
        const colors = particleSystem.geometry.attributes.color as THREE.BufferAttribute;
        
        for (let i = 0; i < positions.count; i++) {
          const time = Date.now() * 0.001;
          const wave = Math.sin(time + i * 0.1) * 0.5;
          
          colors.setX(i, 0.3 + wave * 0.5);
          colors.setY(i, 0.8 + wave * 0.2);
          colors.setZ(i, 1.0);
        }
        colors.needsUpdate = true;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      if (renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };

    function createSimpleTextParticles(text: string, scene: THREE.Scene): THREE.Points {
      const particlesArray = [];
      const colors = [];
      
      // Create a grid of particles that roughly forms the text shape
      const textWidth = text.length * 8;
      const textHeight = 16;
      
      for (let x = 0; x < textWidth; x += 2) {
        for (let y = 0; y < textHeight; y += 2) {
          // Simple text approximation - more particles for letters
          const charIndex = Math.floor(x / 8);
          if (charIndex < text.length && text[charIndex] !== ' ') {
            particlesArray.push(
              x - textWidth / 2,
              y - textHeight / 2,
              Math.random() * 2 - 1
            );
            colors.push(0.3, 0.8, 1.0); // Cyan color
          }
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(particlesArray, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false
      });

      const pointCloud = new THREE.Points(geometry, material);
      scene.add(pointCloud);
      
      return pointCloud;
    }
  }, [text]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}