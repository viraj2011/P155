AFRAME.registerComponent('treasure-component', {
  init: function () {
    // Create treasure entity
    const treasureEntity = document.createElement('a-entity');

    // Set treasure component properties (you may customize these)
    treasureEntity.setAttribute('geometry', {
      primitive: 'box',
      width: 1,
      height: 1,
      depth: 1,
    });
    treasureEntity.setAttribute('material', 'color: gold');
    treasureEntity.setAttribute('position', {
      x: Math.random() * 10 - 5,
      y: 1,
      z: Math.random() * 10 - 5,
    });

    // Add 3D model for the treasure
    treasureEntity.setAttribute('gltf-model', '#treasure-model');

    // Append the treasure entity to the scene
    this.el.appendChild(treasureEntity);
  }
});
