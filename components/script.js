AFRAME.registerComponent("box-behaviour", {
  init: function () {
    const cursor = document.querySelector("a-cursor");

    this.el.addEventListener("click", (event) => {
      this.el.remove();
    });

    this.el.addEventListener("mouseenter", (event) => {
      cursor.setAttribute("material", "color: #dbdb46; shader: flat");
    });

    this.el.addEventListener("mouseleave", (event) => {
      cursor.setAttribute("material", "color: #ffff00; shader: flat");
    });
  },
});

AFRAME.registerComponent("create-object", {
  init: function () {
    // attach this script to scene entity
    const createnewbox = () => {
      // select scene element
      const scene = document.querySelector("a-scene");
      //   create box entity
      const newBox = document.createElement("a-entity");

      // instantiate own gltf model
      newBox.setAttribute("gltf-model", "#peppa");
      // scale up peppa model
      newBox.setAttribute("scale", "2 2");
      //   set box position
      newBox.setAttribute("position", {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 5) + 1,
        z: Math.floor(Math.random() * -5),
      });

      //   set base color for new box
      newBox.setAttribute("color", "#fff");
      //   add custom component to new box
      newBox.setAttribute("box-behaviour", "");

      //   between -10 and 10
      let x = Math.floor(Math.random() * (10 - -10 + 1) + -10);
      let y = Math.random() * 10 + 1;
      let z = Math.floor(Math.random() * (5 - -5 + 1) + -5);
      newBox.setAttribute("animation", {
        property: "position",
        to: `${x}, ${y} ${z}`,
        dur: 20000,
        easing: "linear",
        loop: true,
      });

      //   add new box to the DOM
      scene.appendChild(newBox);
    };

    // set interval for instantiation
    setInterval(createnewbox, 3000);
  },
});
