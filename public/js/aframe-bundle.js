
let startTime = null;

AFRAME.registerComponent('hiderings', {
  schema: {type: 'string'},

  init: function () {
    this.entity = document.querySelector('#theEntity2');
    this.el.addEventListener("model-loaded", () => {
      this.opacitiesById = {};
      startTime = new Date().getTime();
      var mesh = this.entity.getObject3D('mesh');
      if (!mesh) { return; }
      mesh.traverse((node) => {
        if (node.isMesh) {
          this.opacitiesById[node.id] = node.material.opacity;
        }
      });
    })
    this.el.addEventListener('animation-loop', function () {
      startTime = new Date().getTime();
    });
  },

  tick: function () {
    if (!this.opacitiesById || !startTime) {
      return;
    }
    let currentTime = new Date().getTime();
    let timeDelta = ((currentTime - startTime) / 1000) % 30

    let opacity = 1;
    if (timeDelta > 17) {
      opacity = 0;
    } else if (timeDelta > 15) {
      opacity = 1 - ( (timeDelta - 15) / 2 )
    }
    // console.log('timeDelta', timeDelta, opacity);


    var mesh = this.entity.getObject3D('mesh');
    if (!mesh) { return; }
    mesh.traverse((node) => {
      if (node.isMesh) {
        let lastOpacity = node.material.opacity;
        let targetOpacity = this.opacitiesById[node.id] * opacity;
        node.material.opacity = targetOpacity;
        node.material.transparent = true;
        node.material.needsUpdate = lastOpacity !== targetOpacity;
      }
    });
  }
});