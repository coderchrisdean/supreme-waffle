// PyramidScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './PyramidScene.css';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as THREE from 'three';
import { Vector3 } from 'three';

const Pyramid = () => {
  return (
    <mesh>
      <coneBufferGeometry args={[1, 2, 4]} />
      <meshStandardMaterial color="tan" />
    </mesh>
  );
};

const TechnologyIcon = ({ icon, position }) => {
    const [textGeometry, setTextGeometry] = React.useState(null);

    
    
    React.useEffect(() => {
      const fontLoader = new FontLoader();
    fontLoader.load('../../../public/fonts/Roboto Black_Regular.json', (font) => {
      const textGeometry = new TextGeometry(icon.iconName, {
        font: font,
        size: 0.5,
        height: 0.1,
      });
      setTextGeometry(textGeometry);
    });
  }, [icon]);

  return textGeometry ? (
    <mesh position={position} scale={new Vector3(0.1, 0.1, 0.1)}>
      <primitive object={textGeometry} />
      <meshStandardMaterial color="white" />
    </mesh>
  ) : null;
};

const PyramidScene = () => {
  const icons = [
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faDatabase,
    faCodeBranch,
    faAws,
  ];

  const iconPositions = [
    [-2, 1, 0],
    [-1, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
    [2, 1, 0],
    [3, 1, 0],
    [4, 1, 0],
    [5, 1, 0],
  ];

  return (
    <div className="pyramid-scene">
      <Canvas>
        <color attach="background" args={['#333']} />
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Pyramid />
        {icons.map((icon, i) => (
          <TechnologyIcon key={i} icon={icon} position={iconPositions[i]} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default PyramidScene;
