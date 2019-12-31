
import React from 'react';

function Levi() {
  let html = `
    <a-scene embedded>
      <a-entity id="theEntity" position="0 0 -10" gltf-model="url(/gltf/levi/dec18.gltf)" animation-mixer scale="0.05 0.05 0.05" rotation="0 270 0"></a-entity>
      <a-entity look-controls="enabled: false" target-indicator="target: #theEntity;" camera position rotation orbit-controls="target: 0 0 -11; minDistance: 10; maxDistance: 20; initialPosition: 5 5 0; screenSpacePanning: true"></a-entity>
      <a-sky color="#fff"></a-sky>
    </a-scene>
  `
  return (
    <div style={{width: '100%', height: '100%',}} dangerouslySetInnerHTML={{__html: html}}></div>
  );
}

export default Levi;