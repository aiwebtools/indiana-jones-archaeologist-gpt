
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // transparent background
    containerRef.current.appendChild(renderer.domElement);
    
    // Create objects
    const pyramidGeometry = new THREE.ConeGeometry(1, 1.5, 4);
    const scrollGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1.2, 32);
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    
    // Materials with glowing edges
    const pyramidMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    const scrollMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9e00,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0080,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    // Create meshes
    const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    pyramid.position.set(-2, 0, 0);
    
    const scroll = new THREE.Mesh(scrollGeometry, scrollMaterial);
    scroll.position.set(0, 0, 0);
    scroll.rotation.x = Math.PI / 2;
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(2, 0, 0);
    
    scene.add(pyramid);
    scene.add(scroll);
    scene.add(sphere);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate objects
      pyramid.rotation.y += 0.01;
      pyramid.rotation.x += 0.005;
      
      scroll.rotation.z += 0.01;
      
      sphere.rotation.y += 0.01;
      sphere.rotation.x += 0.005;
      
      // Render scene
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-96 md:h-[500px] opacity-90"
    />
  );
};

export default ThreeJSScene;
