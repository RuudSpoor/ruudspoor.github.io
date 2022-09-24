document.addEventListener('DOMContentLoaded', function() {
	
	const file_load_scene = document.getElementById("data_content_file_load_scene");
	file_load_scene.addEventListener("change", ()=>onChangeFileLoadScene(file_load_scene) );
	
	const file_load_data = document.getElementById("data_content_file_load_data");
	file_load_data.addEventListener("change", ()=>onChangeFileLoadData(file_load_data) );
	
}, false);

function onChangeFileLoadScene(elem) {
	console.log(elem.value);
};

function onChangeFileLoadData(elem) {
	console.log(elem.value);
};