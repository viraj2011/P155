AFRAME.registerComponent('fish-component', {
  init: function () {
    // Create fish entity
    const fishEntity = document.createElement('a-entity');

    // Set fish component properties (you may customize these)
    fishEntity.setAttribute('geometry', {
      primitive: 'box',
      width: 1,
      height: 0.5,
      depth: 0.2,
    });
    fishEntity.setAttribute('material', 'color: #3498db');
    fishEntity.setAttribute('position', {
      x: Math.random() * 10 - 5,
      y: Math.random() * 3,
      z: Math.random() * 10 - 5,
    });

    // Add 3D model for the fish
    fishEntity.setAttribute('gltf-model', '#fish-model');

    // Append the fish entity to the scene
    this.el.appendChild(fishEntity);
  }
});
