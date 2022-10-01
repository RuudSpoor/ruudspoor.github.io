document.addEventListener('DOMContentLoaded', function() {

	const canvas = document.getElementById("render_canvas"); // Get the canvas element
	const parent = document.getElementById("viewer_content"); // Get the parent tab containing the canvas element
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.width = parent.offsetWidth;
	canvas.height = parent.offsetHeight;
	const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

	var model = 0;
	
	const createScene = function () {
		const scene = new BABYLON.Scene(engine);

		//const box = BABYLON.MeshBuilder.CreateBox("box", {});
		//box.position.y = 0.5
		
		const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:20, height:20});

		const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
		camera.setPosition(new BABYLON.Vector3(0, 0, -10));
		camera.attachControl(canvas, true);
		
		const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

		return scene;
	};

	const scene = createScene(); //Call the createScene function

	// The first parameter can be set to null to load all meshes and skeletons
	BABYLON.SceneLoader.ImportMesh(null, "./res/", "cube_10x10x10mm.stl", scene, function (meshes) {
		const model_0 = meshes[0];
		model_0.position.y = 5;
	});	
	
	// The first parameter can be set to null to load all meshes and skeletons
	BABYLON.SceneLoader.ImportMesh(null, "./res/", "cube_10x10x10mm.stl", scene, function (meshes) {
		model = meshes[0];
		model.position.y = 20;
	});	

	
	var phase = 0.0;
	
	// Change object properties just before rendering the scene
	scene.registerBeforeRender(function () {
		
	  if(model){
		 
		phase += 0.1;
		model.rotation.y += 0.01;
		model.position.x  += Math.cos(phase);
		model.position.z  += Math.sin(phase);
		
	  }
	  
	});		
	
	// Register a render loop to repeatedly render the scene
	engine.runRenderLoop(function () {
		scene.render();
	});

		
	// Watch for browser/canvas resize events
	window.addEventListener("resize", function () {
	engine.resize();
	});
	

	function onChangeFileObjSelection(element) {

		BABYLON.SceneLoader.Append("", element.value, scene, function (scene) {
			// do something with the scene
		});	
		
	};
	
}, false);
