
import React from 'react';

function Levi() {
  let html = `
    <a-scene embedded renderer="colorManagement: true;" hiderings="true">
      <a-entity id="theEntity" position="0 0 -5" gltf-model="url(/gltf/levi/StarEater.glb)" animation-mixer scale="1 1 1" rotation="0 270 0"></a-entity>
      <a-entity id="theEntity2" position="0 0 -5" gltf-model="url(/gltf/levi/StarEater_rings.glb)" animation-mixer scale="1 1 1" rotation="0 270 0"></a-entity>
      <a-entity look-controls="enabled: false" target-indicator="target: #theEntity;" camera position rotation orbit-controls="target: 0 0 -5; minDistance: 2; maxDistance: 5; initialPosition: 0.5 0.5 -3.5; screenSpacePanning: true"></a-entity>
      <a-sky color="#000"></a-sky>
      <a-entity light="type: spot; color: #77F; intensity: 10.5; angle: 180" position="0 0.05 -5"></a-entity>
      <a-entity light="color: #FFF; intensity: 1" position="-1 1 0"></a-entity>
      <a-entity light="color: #FFF; intensity: 1" position="1 1 0"></a-entity>
      <a-entity light="color: #FFF; intensity: 1" position="-1 1 -10"></a-entity>
      <a-entity light="color: #FFF; intensity: 1" position="1 1 -10"></a-entity>
    </a-scene>
  `
  return (
    <div style={{width: '100%', height: '100%',}} dangerouslySetInnerHTML={{__html: html}}></div>
  );
}

export default Levi;