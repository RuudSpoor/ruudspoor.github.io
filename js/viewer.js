document.addEventListener('DOMContentLoaded', function() {

	const file_obj_selection = document.getElementById("file_obj_selection");
	file_obj_selection.addEventListener("change", ()=>onChangeFileObjSelection(file_obj_selection))	

	const canvas = document.getElementById("render_canvas"); // Get the canvas element
	const parent = document.getElementById("viewer_content"); // Get the parent tab containing the canvas element
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.width = parent.offsetWidth;
	canvas.height = parent.offsetHeight;
	const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

	const createScene = function () {
	const scene = new BABYLON.Scene(engine);

	//const box = BABYLON.MeshBuilder.CreateBox("box", {});
	//box.position.y = 0.5
	
	const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});

	const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
	camera.attachControl(canvas, true);
	
	const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

	return scene;
	};

	const scene = createScene(); //Call the createScene function

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
