var dropBox;

window.onload = function(){
	
	dropBox = document.getElementById('dropBox');
	dropBox.ondragenter = ignoreDrag;
	dropBox.ondragover = ignoreDrag;
	dropBox.ondrop = drop;
};
function ignoreDrag(e){
	
	e.stopPropagation();
	e.preventDefault();
}
function drop(e){
	
	e.stopPropagation();
	e.preventDefault();
	
	var data = e.dataTransfer;
	var files = data.files;
	processFiles(files);
}
function processFiles(files){
	
	var file = files[0];
	var reader = new FileReader();
	
	reader.onload = function(e){
		dropBox.style.backgroundImage = "url('"+e.target.result+"')";
		console.log(e.target.result);
	};
	reader.readAsDataURL(file);
}

var btn = document.getElementById('btn');
btn.onclick = showFileInput;
var fileInput = document.getElementById('fileInput');

function showFileInput(){
		
	fileInput.click();
}


